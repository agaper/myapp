import axios from 'axios'
import requestInterceptor from './interceptors/request/ms'
import responseInterceptor from './interceptors/response/ms'
import _ from 'lodash'

function createHttp(){
  let http = axios.create({
    baseURL: window.location.origin + '/api'
  });
  
  const [requestResolve, requestReject] = requestInterceptor;
  http.interceptors.request.use(requestResolve, requestReject);
  
  const [responseResolve, responseReject] = responseInterceptor;
  http.interceptors.response.use(responseResolve, responseReject);

  return http;
}

export default {
    get (api, params){
      return createHttp().get(api, {
        params: params
      }).catch((err) => {
        console.error(`http get error: ${api}`, err);
      });
    },
    post (api, params){
      return createHttp().post(api, params).catch((err) => {
        console.error(`http post error: ${api}`, err);
      });
    }
}
