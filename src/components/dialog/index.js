import Vue from 'vue'
import tpl from './tpl'

let instance = null
let compConstructor = Vue.extend(tpl)

function createComp(){
  instance = new compConstructor()
  document.body.appendChild(instance.$mount().$el)
}

function caller(ctx){
  console.log(instance);
  // 单例，全局只存在一个该弹框
  if(!instance){
    createComp()
    console.log(instance);
    return instance.show(ctx, () => {
      instance = null;
    })
  }
}

Vue.prototype.$demoDialog = caller
