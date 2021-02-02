<template>
  <div class="tpage">
    <h1 class="page-title">{{$route.meta.pageTitle}}</h1>

    <div class="demo-box">
      <h2 class="demo-title"></h2>
      <div class="btns">
        <button ref="btn-1" class="pj-btn mid theme">示例一</button>
      </div>
    </div>

  </div>
</template>

<script>
import Rx from 'rxjs';

console.log(Rx);

export default {
  name: 'PageTest',
  data(){
    return {
    }
  },
  created(){
    
  },
  mounted(){
    this.$nextTick(() => {
      // Observable.fromEvent(this.$refs['btn-1'], 'click')
      //   .subscribe( () => console.log('Clicked!') );


    });
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>


