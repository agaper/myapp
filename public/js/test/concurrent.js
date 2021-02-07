const CODE_RUN_COST_TIME_LOG = 'CODE_RUN_COST_TIME_LOG';

const taskAction = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timeout)
    }, timeout);
  })
}

const taskList = [];
for(let i=0; i<4; i++){
  taskList.push(1000);
}

async function startNoConcurrentControl(){
  console.time(CODE_RUN_COST_TIME_LOG);

  await Promise.all(taskList.map(item => taskAction(item)))
  
  console.timeEnd(CODE_RUN_COST_TIME_LOG);
}

// startNoConcurrentControl()  



//   队列的「先进先出」特性可以保证任务并发执行的顺序，在 JavaScript 中可以通过「数组来模拟队列」：
class Queue{
  constructor(){
    this._queue = [];
  }
  push(value){
    return this._queue.push(value);
  }
  shift(){
    return this._queue.shift();
  }
  isEmpty(){
    return this._queue.length === 0;
  }
}

// 对于每一个任务，需要管理其执行函数和参数
class DeplayedTask{
  constructor(resolve, fn, args){
    this.resolve = resolve;
    this.fn = fn;
    this.args = args;
  }
}


// 核心的TaskPool类，控制任务的执行
class TaskPool {
  constructor(size){
    // 任务池中能够执行的任务数量
    this.size = size;
    this.queue = new Queue();
  }

  addTask(fn, args){
    return new Promise((resolve) => {
      let task = new DeplayedTask(resolve, fn, args);
      this.queue.push(task);
      if(this.size){
        this.size--;
        const { resolve: taskResolve, fn, args } = this.queue.shift();
        taskResolve(this.runTask(fn, args));
      }
    });
  }

  addTask2(fn){
    return (...args) => {
      return new Promise((resolve) => {
        let task = new DeplayedTask(resolve, fn, args);
        this.queue.push(task);
        if(this.size){
          this.size--;
          const { resolve: taskResolve, fn, args } = this.queue.shift();
          taskResolve(this.runTask(fn, args));
        }
      })
    }
  }

  runTask(fn, args){
    const result = Promise.resolve(fn(...args));
    result.then(() => {
      this.size--;
      this.pullTask();
      console.trace(`excute trace - ${args}`);
    }).catch(() => {
      this.size--;
      this.pullTask();
    });
    return result;
  }

  pullTask(){
    if(this.queue.isEmpty()){
      return;
    }
    if(this.size === 0){
      return;
    }
    this.size++;
    const {resolve, fn, args} = this.queue.shift();
    resolve(this.runTask(fn, args));
  }

}

const concurrentContainer = new TaskPool(2);

async function startConcurrentControl(){
  console.time(CODE_RUN_COST_TIME_LOG);

  // let tasks = taskList.map((item) => {
  //   return concurrentContainer.addTask(taskAction, [item]);
  // });
  // await Promise.all( tasks );

  await Promise.all(taskList.map(concurrentContainer.addTask2(taskAction)))
  
  console.timeEnd(CODE_RUN_COST_TIME_LOG);
}

startConcurrentControl()



class HighPerformanceQueue{
  constructor(){
    // 用户push数据
    this.q1 = [];
    // 用户shift数据，取出队头元素
    this.q2 = [];
  }
  push(value){
    return this.q1.push(value);
  }
  shift(){
    let q2 = this.q2;
    if( q2.length === 0 ){
      const q1 = this.q1;
      if( q1.length === 0 ){
        return;
      }
      this.q1 = q2;
      q2 = this.q2 = q1.reverse();
    }
    return q2.pop();
  }
  isEmpty(){
    return this.q1.length === 0 && this.q2.length === 0;
  }
}