
export default [
  response => {
    // console.log('response', response);
    // logger.debugLog('=======rsponse from backend=======\n', JSON.stringify(response.data, null, 2));
    return response.data;
  },
  error => {
    // console.log(error);
    if (error.response.data.code && error.response.data.code === 401) {
      // window.AppRuntimeContext.instance.$notify.error({
      //   title: '错误',
      //   message: '请先登录'
      // })
    }
    return Promise.reject(error);
  }
]
