import moment from 'moment';

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

  isValidEmail(val){
    if( '' == val ) return;
    let res = true;
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/g;
    res = reg.test(val);
    return res;
  },

};