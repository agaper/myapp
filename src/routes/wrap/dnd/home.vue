<template>
  <div class="tpage">
    <h1 class="page-title">{{$route.meta.pageTitle}}</h1>
    <div class="box">
      <span class="target target-headimg">head</span>
      <span class="target target-qrcode">qrcode</span>    
    </div>	
  </div>
</template>

<script>

export default {
  name: 'PageTest',
  data(){
    return {
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.initDnd();
    });
  },
  methods: {
    initDnd(){
      var me = this,
          container = document.querySelector('.box'),
          headimg = document.querySelector('.target-headimg'),
          qrcode = document.querySelector('.target-qrcode'),
          areaLeft = container.offsetLeft,
          areaTop = container.offsetTop,
          areaWidth = container.offsetWidth,
          areaHeight = container.offsetHeight,
          pointerX = 0,
          pointerY = 0,
          canDragHeadimg = false,
          canDragQrcode = false;
      headimg.addEventListener('touchstart', function(evt){ 
        canDragHeadimg = true; 
        pointerX = evt.touches[0].pageX - this.offsetLeft;
        pointerY = evt.touches[0].pageY - this.offsetTop;
      }, false);
      headimg.addEventListener('click', function(evt){ 
        import('@/components/dialog').then(() => {
          me.$demoDialog(me)
        }).catch((err) => {
          console.error('@/components/dialog', err);
        });
      }, false);

      headimg.addEventListener('mousedown', function(evt){ 
        canDragHeadimg = true; 
        pointerX = evt.x - this.offsetLeft;
        pointerY = evt.y - this.offsetTop;
      }, false);
      qrcode.addEventListener('mousedown', function(evt){ 
        canDragQrcode = true; 
        pointerX = evt.x - this.offsetLeft;
        pointerY = evt.y - this.offsetTop;
      }, false);
      qrcode.addEventListener('click', () => {
        import('@/components/dialog').then(() => {
          me.$demoDialog(me)
        }).catch((err) => {
          console.error('@/components/dialog', err);
        });
      }, false);

      document.addEventListener('touchmove', function(evt){ 
        var x = evt.touches[0].pageX - pointerX,
            y = evt.touches[0].pageY - pointerY;
        if(x < 0) x = 0;
        if(y < 0) y = 0;
        if(x >= (areaWidth - headimg.offsetWidth) ) x = areaWidth - headimg.offsetWidth;
        if(y >= (areaHeight - headimg.offsetHeight) ) y = areaHeight - headimg.offsetHeight;
        if(canDragHeadimg){
          headimg.style.left = x + 'px';
          headimg.style.top = y + 'px';
        }
        if(canDragQrcode){
          qrcode.style.left = x + 'px';
          qrcode.style.top = y + 'px';
        }
      }, false);
      document.addEventListener('mousemove', function(evt){ 
        var x = evt.x - pointerX,
            y = evt.y - pointerY;
        if(x < 0) x = 0;
        if(y < 0) y = 0;
        if(x >= (areaWidth - headimg.offsetWidth) ) x = areaWidth - headimg.offsetWidth;
        if(y >= (areaHeight - headimg.offsetHeight) ) y = areaHeight - headimg.offsetHeight;
        if(canDragHeadimg){
          headimg.style.left = x + 'px';
          headimg.style.top = y + 'px';
        }
        if(canDragQrcode){
          qrcode.style.left = x + 'px';
          qrcode.style.top = y + 'px';
        }
      }, false);
      document.addEventListener('mouseup', function(){
        canDragHeadimg = false;
        canDragQrcode = false;
      }, false);
      document.addEventListener('touchend', function(){
        canDragHeadimg = false;
        canDragQrcode = false;
      }, false);
    }
  }
}
</script>

<style lang="scss" scoped>
.box{  width: 300px; height: 300px; position: relative; border:1px solid #ccc; margin:100px auto; }
.target{ position: absolute; left:40px; display: block;  width:50px; height: 50px; cursor: move;  }
.target-headimg{ top:20px; background-color: #ccc;  }
.target-qrcode{ bottom:20px; background-color: #42bd56;  }
</style>
