<template>
  <div class="tpage">
    <h1 class="page-title">{{$route.meta.pageTitle}}</h1>

    <div class="demo-box">
      <h2 class="demo-title">Blob实现下载文件</h2>
      <div>
        <a id="blob_download" class="pj-cursor-pointer">click to download by Blob</a>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">Blob实现图片本地显示</h2>
      <div>
        <input type="file" id="blob_show_img" />
        <img id="blob_show_img_node" style="width:100px;height:100px;object-fit:cover;" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'PageTest',
  data(){
    return {
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.initBlobDownload();  
      this.initBlobShowImg();  
    });
  },
  methods: {
    initBlobShowImg(){
      let imgNode = document.getElementById('blob_show_img_node');
      $('#blob_show_img').on('change', (e) => {
        let file = e.target.files[0];
        const url = window.URL.createObjectURL(file);
        imgNode.src = url;
        imgNode.onload = () => {
          // 释放一个之前通过调用 URL.createObjectURL创建的 URL 对象
          window.URL.revokeObjectURL(url);
        }
      });
    },
    initBlobDownload(){
      let blob = new Blob(['Hello World! Here is blob test']);
      // download属性不兼容IE, 对IE可通过window.navigator.msSaveBlob方法或其他进行优化
      let url = window.URL.createObjectURL(blob);
      $('#blob_download').attr({
        download: 'blob1.txt',
        href: url,
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
