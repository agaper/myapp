<template>
  <transition name="pj-overlay-fade">
    <div
      class="pj-overlay"
      v-show="showDialog"
    >
      <div class="pj-dialog pj-hvcenter">
        这里是一个弹框
        <div class="btns">
          <button @click.self="onCancel" class="pj-btn mid has-border">取消</button>
          <button @click.self="onConfirm" class="pj-btn mid theme">确定</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  data(){
    return {
      showDialog: false,
      ctx: null,
      cb: null,
      resolve: null,
      reject: null,
    }
  },
  methods: {
    show(ctx, cb){
      this.showDialog = true;
      this.ctx = ctx
      this.cb = cb;
      return new Promise((resolve, reject) => {
        document.body.style.overflow = 'hidden';
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    hide(){ 
      this.showDialog = false;
      this.cb && this.cb();
      document.body.removeChild(this.$el);
      document.body.style.overflow = '';
      this.$destroy();
    },
    onCancel(){
      this.reject && this.reject();
      this.hide();
    },
    onConfirm(){
      this.resolve && this.resolve();
      this.hide();
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
