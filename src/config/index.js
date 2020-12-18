let config = {
  // 分隔字符串的单位 
  stringDividerReg: /,|\s|\n/g,
  // 验证密码，不小于8位
  regForPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
  
}

export default config
