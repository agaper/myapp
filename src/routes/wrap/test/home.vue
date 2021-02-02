<template>
  <div class="tpage">
    <h1 class="page-title">{{$route.meta.pageTitle}}</h1>

    <div class="demo-box">
      <h2 class="demo-title">标题</h2>
      <div>
        <h1 class="pj-h1">
          标题标题,标题标题标题标题,标题标题题标题标题,标题标题
        </h1>
        <h2 class="pj-h2">
          标题标题,标题标题标题标题,标题标题题标题标题,标题标题
        </h2>
        <h3 class="pj-h3">
          标题标题,标题标题标题标题,标题标题题标题标题,标题标题
        </h3>
        <h4 class="pj-h4">
          标题标题,标题标题标题标题,标题标题题标题标题,标题标题
        </h4>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">常见的文本</h2>
      <div class="pj-hide-txt" style="margin-bottom: 10px">
        单行的-比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本
      </div>
      <div class="pj-clamp-txt" style="margin-bottom: 10px">
        多行的-比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本比较长的文本
      </div>
      <div class="pj-info">
        <span class="pj-info-item">23喜欢</span>
        <span class="pj-info-item">2019-04-23</span>
        <span class="pj-fr">更多</span>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">元素垂直居中</h2>
      <div class="center-box">
        <div class="pj-hvcenter">这个元素是垂直居中</div>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">按钮，根据项目可自定义各个尺寸</h2>
      <div class="btns">
        <button class="pj-btn">文字按钮</button>
        <button class="pj-btn has-border">带边框按钮</button>
        <button class="pj-btn mid theme">按钮-mid</button>
        <router-link to="/rxjs" class="pj-btn big has-border">按钮-big，前往RxjsDemo</router-link>
        <router-link to="/dnd" class="pj-btn big theme">按钮-big, 前往拖拽页面</router-link>
        <router-link to="/byte" class="pj-btn big theme">按钮-big, 前往二进制家族页面</router-link>
        <button class="pj-btn big has-border">按钮-big</button>
        <button class="pj-btn big disabled">按钮-disabled</button>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">元素点击带有高亮的样式</h2>
      <div>
        <div class="demo-click-elem pj-click-hlg" onclick="alert(123)">
          可点击元素
        </div>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">半像素细线</h2>
      <div class="slines-box">
        <div class="item pj-sline-t">上方的细线</div>
        <div class="item pj-sline-b">下方的细线</div>
        <div class="item pj-sline-l">左边的细线</div>
        <div class="item pj-sline-r">右边的细线</div>
        <div class="item pj-sline-four">四周细线</div>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">小三角</h2>
      <span class="pj-arrow-line">边框小三角</span>
      <div></div>
      <span class="pj-arrow-filled">实心小三角</span>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">横向滚动，由于滚动条样式去掉了，电脑上不太方便</h2>
      <div class="pj-hscroller pj-horizontal-scrollerbar">
        <div class="item">scroll - item</div>
        <div class="item">scroll - item</div>
        <div class="item">scroll - item</div>
        <div class="item">scroll - item</div>
        <div class="item">scroll - item</div>
        <div class="item">scroll - item</div>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">无限滚动-竖直</h2>
      <div class="demo-scroller" style="height: 68px; margin-top:20px;">
        <div ref="listContainer1" class="scroller-container">
          <div ref="listOri1" class="scroller-items">
            <div class="scroller-item" v-for="item in 4" :key="item">滚动列表项目滚动列表项目滚动列表项目-{{item}}</div>
          </div>
          <div ref="listCopyed1" class="scroller-items"></div>
        </div>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">无限滚动-水平</h2>

      <!-- <div class="pj-hscroller pj-horizontal-scrollerbar">
        <div v-for="item in 4" :key="item" class="item">scroll - item</div>
      </div> -->
      <div class="demo-scroller">
        <div ref="listContainer2" class="scroller-container">
          <div ref="listOri2" class="scroller-items">
            <div class="scroller-item" v-for="item in 4" :key="item">滚动列表项目滚动列表项目滚动列表项目-{{item}}</div>
          </div>
          <div ref="listCopyed2" class="scroller-items"></div>
        </div>
      </div>
    </div>

    <div id="demo" v-cloak class="demo-box">
      <h2 class="demo-title">弹出框</h2>
      <div class="btns">
        <button @click="showDemoDialog = true" class="pj-btn mid theme">
          显示弹框
        </button>
      </div>
      <transition name="pj-overlay-fade">
        <div
          class="pj-overlay"
          v-show="showDemoDialog"
          @click.self="showDemoDialog = false"
        >
          <div class="pj-dialog pj-hvcenter">rff</div>
        </div>
      </transition>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">图文混排</h2>
      <div class="img-with-text pj-cf">
        <div class="pj-img"></div>
        <p class="title">图文混排图文混排</p>
        <p class="title">图文混排图文混排</p>
        <div class="pj-info">
          <span class="pj-info-item">23喜欢</span>
          <span class="pj-info-item">2019-04-23</span>
          <span class="pj-fr">更多</span>
        </div>
        <span class="other-elem pj-vcenter">其他元素</span>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">列表底部加载状态</h2>
      <div class="list-btm-loadstatus">
        <span><span class="icon-load loading"></span>加载中</span>
        <span>没有更多了</span>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">文字均匀排布</h2>
      <div class="pj-row">
        <div class="pj-justify-field">姓名</div>
        <div class="pj-justify-val">小哈哈</div>
      </div>
      <div class="pj-row pj-sline-b">
        <div class="pj-justify-field">电话</div>
        <div class="pj-justify-val">18951665167</div>
      </div>
      <div class="pj-row">
        <div class="pj-justify-field">订单号</div>
        <div class="pj-justify-val">827232873283</div>
      </div>
      <div class="pj-row">
        <div class="pj-justify-field">下单时间</div>
        <div class="pj-justify-val">xxxx-xx-xx</div>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">倒计时</h2>
      <div class="countdown demo-md pj-cf">
        <span class="label">距离结束还有：</span>
        <span class="num">12</span>
        <span class="divider">天</span>
        <span class="num">2</span>
        <span class="divider">时</span>
        <span class="num">12</span>
        <span class="divider">分</span>
        <span class="num">34</span>
        <span class="divider">秒</span>
      </div>
    </div>

    <div class="demo-box">
      <h2 class="demo-title">步骤条示例</h2>
      <div class="verify-step-wrap">
        <div class="verify-step flexbox-row">
          <div class="item flex-1 active">
            <span class="item-num">1</span>
            <span class="item-name">上传企业营业执照</span>
            <div class="item-arr-bg"></div>
            <div class="item-arr"></div>
          </div>
          <div class="item flex-1">
            <span class="item-num">2</span>
            <span class="item-name">企业对公账户打款</span>
            <div class="item-arr-bg"></div>
            <div class="item-arr"></div>
          </div>
          <div class="item flex-1">
            <span class="item-num">3</span>
            <span class="item-name">审核成功</span>
          </div>
        </div>  
      </div>
    </div>

    <div class="pj-skeleton-nodes-wrap">
      <div class="skeleton-remove-after-first-request" style="animation:flush 2s linear infinite;position:fixed;top:0;bottom:0;width:100%;z-index:9999;background:linear-gradient(to left,rgba(255,255,255,0) 0,rgba(255,255,255,.85) 50%,rgba(255,255,255,0) 100%)">
      </div>
      <div class="skeleton-remove-after-first-request" style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9998;background-repeat:no-repeat!important;background-size:100% auto!important;background-image:url(data:image/png;base64,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)!important;background-color:#fff!important;background-position:center 0!important"></div>
    </div>

  </div>
</template>

<script>
import testError from '@/assets/js/test_error';

testError.testFn();

setTimeout(() => {
  
}, 100);

let scrollTimer1 = null;
let scrollTimer2 = null;
export default {
  name: "PageTest",
  data() {
    return {
      showDemoDialog: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initVScroller();
      Promise.resolve().then(() => {
        console.log( this.$util.getPageScrollTop() );  
      });
      setTimeout(function () {
        window.SKELETON && SKELETON.destroy()
      }, 1000);
    });
  },
  methods: {
    initVScroller: function (){
      var listContainer1 = this.$refs.listContainer1,
          listCopyed1 = this.$refs.listCopyed1,
          listOri1 = this.$refs.listOri1;
      scrollTimer1 = this.$util.setupScroller({
        isVertical: true,
        // distance: 68,
        listContainer: listContainer1,
        listCopyed: listCopyed1,
        listOri: listOri1,
        diff: 30,
      });

      var listContainer2 = this.$refs.listContainer2,
          listCopyed2 = this.$refs.listCopyed2,
          listOri2 = this.$refs.listOri2;
      scrollTimer2 = this.$util.setupScroller({
        isVertical: false,
        listContainer: listContainer2,
        listCopyed: listCopyed2,
        listOri: listOri2,
        diff: 30,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.demo-scroller.scroll-y{ overflow-y: scroll; }
.demo-scroller.scroll-x{ overflow-x: scroll; }
.demo-scroller::-webkit-scrollbar-track-piece,
.demo-scroller::-webkit-scrollbar{ width: 0; height: 0; }
.scroller-container{ position: relative; overflow: hidden; }
.scroller-items.horizontal{ float:left; }
.demo-scroller.scroll-x .scroller-item{ float: left; width: 220px; padding:20px; border:1px solid #ccc; margin-right: 20px; }

.verify-step-wrap{ padding: 30px 0; background-color: #eee; 
  .item{ white-space: nowrap; }
  .item-arr-bg{ background-color: #eee;  }
  .item-arr-bg:after{ border-left-color:#eee; }
}

.img-with-text {
  padding: 0 90px 0 0;
}
.img-with-text .pj-img {
  width: 70px;
  height: 70px;
}
.img-with-text .other-elem {
  right: 0;
}

.hide {
  display: none;
}

.center-box {
  position: relative;
  height: 100px;
  border: 1px solid orange;
}
.center-box .pj-hvcenter {
  padding: 10px;
  border: 1px solid #ccc;
}
.btns .pj-btn {
  margin-bottom: 10px;
}
.demo-click-elem {
  line-height: 42px;
  text-align: center;
  border: 1px solid #ccc;
}
.slines-box .item {
  line-height: 32px;
  margin-bottom: 10px;
  text-align: center;
}

.pj-arrow-line {
  padding-right: 10px;
}
.pj-arrow-filled {
  padding-right: 12px;
}
.pj-arrow-filled:before {
  top: 5px;
}

.test-btm {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 8px;
  border-top: 1px solid #ccc;
  background-color: #fff;
}
.aipt {
  height: 32px;
  width: 100%;
  border: 1px solid #eee;
}
</style>
