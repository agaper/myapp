export default {
  testFn(){
    // try {
      setTimeout(() => {
       // console.log(HereIsAnUndefinedVariable, [].dddd);
      }, 100);
    // } catch (error) {
    //   console.log('直接用try-catch包裹延时方法，无法捕获到报错信息，但是能在window.onerror中被捕获到的');  
    // }
    
    // Promise实例抛出的异常捕获不到，try-catch不能捕获到
    // try {
      new Promise((resolve, reject) => {
        reject('promise error');
      });  
    // } catch (error) {
    //   console.error('a Promise error', error);  
    // }
    
  }
}