import moment from 'moment';
import Vue from 'vue';

const startDateByYear = moment().year(moment().year()).startOf('year').format('YYYY-MM-DD');
const endDateByYear = moment().year(moment().year()).endOf('year').format('YYYY-MM-DD');

const startDateByMonth = moment().month(moment().month()).startOf('month').format('YYYY-MM-DD');
const endDateByMonth = moment().month(moment().month()).endOf('month').format('YYYY-MM-DD');

const startDateByWeek = moment().week(moment().week()).startOf('week').format('YYYY-MM-DD');   
const endDateByWeek = moment().week(moment().week()).endOf('week').format('YYYY-MM-DD'); 

const todayDate = moment().format('YYYY-MM-DD');

export default {
  
  dateDict: {
    startDateByYear,
    endDateByYear,

    startDateByMonth,
    endDateByMonth,

    startDateByWeek,
    endDateByWeek,
    
    todayDate,
  },
  
  /**
   * @description 返回一定时间段内的天、小时、分钟、秒
   * @method
   * @param {number} diff @description 时间差
   * @param {functional} stopCallback @description 时间差为0的时候的回调
   * @return {object} @description 返回的结果集
   */
  calculateTimeDiff(diff, stopCallback){
    let res = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    if (diff && diff > 0) {
      let days = diff / 60 / 60 / 24 >= 1 ? Math.floor(diff / 60 / 60 / 24) : 0;
      let hours = diff / 60 / 60 % 24 >= 0 ? Math.floor(diff / 60 / 60 % 24) : 0;
      let minutes = diff / 60 % 60 >= 0 ? Math.floor(diff / 60 % 60) : 0;
      let seconds = diff % 60 % 60 >= 0 ? Math.floor(diff % 60 % 60) : 0;
      res = {
        days: days,
        hours: hours < 10 ? ("0" + hours) : hours,
        minutes: minutes < 10 ? ("0" + minutes) : minutes,
        seconds: seconds < 10 ? ("0" + seconds) : seconds
      };
    }else{
      if (stopCallback) {
        stopCallback();
      }
    }
    return res;
  },

  /**
   * @description 格式是否符合邮箱
   * @param {string} val
   * @return {boolean} 
   */
  isValidEmail(val){
    if( '' == val ) return;
    let res = true;
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9\-]+\.([a-zA-Z]{2,4})$/g;
    res = reg.test(val);
    return res;
  },

  /**
   * @description 格式是否符合手机号
   * @param {string} val
   * @return {boolean} 
   */
  isValidPhone(val){
    if (!val) return false;
    var testReg = /^1[23456789]\d{9}$/;
    return testReg.test(val);
  },

  /**
   * @description 格式是否符合域名，不对IP做判断
   * @param {string} val
   * @return {boolean} 
   */
  isValidDomain(val){
    if( '' == val ) return;
    let res = true;
    let reg = /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/g;
    res = reg.test(val);
    let parts = val.split('.');
    let valIsMadeByNum = false;
    for(let i=0; i<parts.length; i++){
      valIsMadeByNum = isNaN( parseInt(parts[i]) ) ? false : true ;
    }
    return res && !valIsMadeByNum;
  },

  /**
   * @description 格式是否符合IP+端口
   * @param {string} val
   * @return {boolean} 
   */
  isValidIpAndPort(val){
    if( '' == val ) return;
    let res = true;
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;
    res = reg.test(val);
    return res;
  },

  /**
   * @description 格式是否符合IP
   * @param {string} val
   * @return {boolean} 
   */
  isValidIp(val){
    if( '' == val ) return;
    let res = true;
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\/)([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5]))*$/;
    res = reg.test(val);
    return res;
  },

  /**
   * @description 对富文本中的字符串进行处理
   * @param {string} content
   * @return {string} 
   */
  handleRichText(content){
    if(!content) return;
    var content = content.replace(/<img/g, '<img style="max-width:100% !important;" ');
    if (content.indexOf('data-original=') !== -1) {
      content = content.replace(/data-original/g, 'src');
    }
    // 小程序的富文本组件中不支持渲染某些HTML标签
    content = content.replace(/(section|article|aside|bdi|figure|figcaption|header|footer|mark|summary|time)/g, 'div');
    return content;
  },

  /**
   * @description 分页处理器
   * @param {object} config
   * @return {object} 
   */
  dataSource(config){
    if (typeof (config) === 'string') {
      config = { url: config, try: null, transform: null };
    }
    return {
      finish: false,
      data: [],
      empty: false,
      loading: false,
      total: config.total ? config.total : 0,
      params: {
        step: 20,
        page: 0
      },
      reload: function () {
        this.empty = false;
        this.data = [];
        this.params.page = 0;
        this.finish = false;
        this.next();
      },
      firstPageLoaded: config.firstPageLoaded || null,
      loadedCallback: null,
      next: function () {
        if (this.finish) {
          return;
        }
        this.loading = true;
        this.params.page += 1;
        // 请求方法注意要从项目当中引入，
        request(config.url, this.params, (result) => {
          this.loading = false;
          // 返回原始数据
          if (config.getRawData instanceof Function) {
            config.getRawData(result);
          }
          if (this.params.page == 1 && this.firstPageLoaded instanceof Function) {
            this.firstPageLoaded(result)
          }
          var data = result;
          if (!(result instanceof Array)) {
            data = result.data
            this.total = result.total
          }
          if (data.length == 0) {
            if (this.data.length == 0) {
              this.empty = true;
            }
            this.finish = true;
            return
          }
          //this.finish = data.length < this.params.step ? true : false
          for (var i = 0; i < data.length; i++) {
            this.data.push(data[i]);
          }
          if (this.loadedCallback instanceof Function) {
            this.loadedCallback()
          }
        }, (err, code) => {
          this.loading = false;
          console.log(err, code)
        });
      },
      search: function (params) {
        this.params = {
          step: this.params.step,
          page: 0
        };
        for (var key in params) {
          this.params[key] = params[key];
          Vue.set(this.params, key, params[key]);
        }
        this.reload();
      }
    };
  },

  /**
   * @description 获取链接?后的参数
   * @param {string} link
   * @return {object} 
   */
  linkParamsParser(link){
    if ('' == link) return {};
    link = link || window.location.search;
    var searchString = link,
      searchString = searchString.substr(searchString.indexOf('?')),
      searchString = searchString.replace(/\?/g, ''),
      dict = {};
    if (searchString) {
      var paramArr = searchString.split('&');
      for (var item in paramArr) {
        var itemStr = paramArr[item];
        var pairArr = itemStr.split('=');
        dict[pairArr[0]] = pairArr[1];
      }
    }
    return dict;
  },

  


  // H5一些相关的
  h5Helper: {
    isAndroid(){
      return window.navigator.appVersion.toLowerCase().indexOf('android') != -1;
    },
    isIOS(){
      return window.navigator.appVersion.toLowerCase().indexOf('iphone') != -1;
    },
    isWeiXinWeb: function () {
      var ua = window.navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) == 'micromessenger';
    },
  }


};