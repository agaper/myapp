<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'AppRoot',
  mounted(){
    console.log('HTML加载完成时间	', performance.timing.responseEnd-performance.timing.fetchStart);
    console.log('HTML解析完成时间	', performance.timing.domInteractive-performance.timing.fetchStart, performance.timing.domInteractive, performance.timing.fetchStart);
  }
}
</script>

<style lang="scss">
@each $var in 0, 2, 4, 6, 10, 12, 15, 20, 25, 30 {
  .vspace-#{$var}x {
    height: #{$var}px;
  }
  .margin-#{$var}x {
    margin: #{$var}px !important;
  }
  .margin-t-#{$var}x {
    margin-top: #{$var}px !important;
  }
  .margin-l-#{$var}x {
    margin-left: #{$var}px !important;
  }
  .margin-r-#{$var}x {
    margin-right: #{$var}px !important;
  }
  .margin-b-#{$var}x {
    margin-bottom: #{$var}px !important;
  }
}

@each $var in 12, 14, 16, 18, 20 {
  .font-s-#{$var}x {
    font-size: #{$var}px !important;
  }
}

.flexbox-row{ display: flex; flex-direction: row !important; }
.flexbox-col{ display: flex; flex-direction: column !important; }
.flexbox-align-justify{ justify-content:space-between !important; }
.flexbox-align-around{ justify-content:space-around !important; }
.flexbox-align-center{ justify-content: center !important; }
.flexbox-align-end{ justify-content: flex-end !important; }
.flexbox-col-center{ align-items: center !important; }
.flexbox-col-end { align-items: flex-end !important; }
.flexbox-wrap { flex-wrap: wrap !important; }
.flex-1{ flex: 1 !important; }
.flex-no-zoom{ flex-shrink: 0 !important; }

.gray{ color: #999; } .gray-light{ color: #ccc;  } .theme-color{ color: #1890ff; }
.hlg-err{ color: #fa7541; font-weight: 600; }
.hlg-ok{ color: #67C23A; font-weight: 600; }
.text-align-center{ text-align: center;  }
.text-align-right{ text-align: right; }
.cursor-pointer{ cursor: pointer; }

.bold{ font-weight: bold; }
.hide-txt{ overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.clamp-txt-3{ overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }

.width-full{ width:100%; }

.page-title{ font-size: 28px; margin-bottom: 30px; }
.demo-box {
  margin-bottom: 30px;
}
.demo-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.pj-cursor-pointer{ cursor: pointer; }
.pj-btn.has-border{ color:#333; }

@keyframes flush{
  0%{ left: -100%; }
  50%{ left: 0; } 
  100%{ left: 100%; }
}

</style>

