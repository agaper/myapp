<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo-w">
        <img src="/imgs/logo.svg" style="width:120px;" alt="">
      </div>
      <a-menu theme="dark" :default-selected-keys="defaultSelectedKeysForMenu" mode="inline" @click="onClickItem" @select="onMenuSelect">
        <a-menu-item v-for="(item, index) in menu" :key="index">
          <a-icon :type="item.icon" />
          <span>{{item.name}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 15px; border-bottom:1px solid #efefef;">
        <div class="flexbox-row flexbox-align-justify flexbox-col-center">
          <div class="font-s-16x bold">{{$route.meta.pageTitle}}</div>
          <div>
            <a-dropdown-button>
              <a-icon slot="icon" type="user" />
              {{username}}
              <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1">退出登录</a-menu-item>
              </a-menu>
            </a-dropdown-button>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content style="padding: 12px; height:60vh; overflow-x:hidden; overflow-y:scroll;">
         <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import _ from 'lodash'
import routes from '@/routes'

export default {
  data() {
    let menu = [];
    _.each(routes, (route) => {
      if(route.path == '/login') return;
      menu.push({
        name: route.children ? route.children[0].meta.pageTitle : '',
        path: route.path,
        icon: route.children ? route.children[0].meta.icon : '',
      });
    });
    return {
      collapsed: false,
      username: this.$cookies.get(this.$GlobalConstants.loginUsername),
      defaultSelectedKeysForMenu: [],
      menu: menu
    }
  },
  watch: {
    '$route.path'(){
      // TODO 通过浏览器前进后退按钮，控制侧边菜单的激活状态
      this.setupDefaultSelectedKeysForMenu();  
    }
  },
  created() {
    this.setupDefaultSelectedKeysForMenu();
  },
  methods: {
    
    setupDefaultSelectedKeysForMenu(){
      _.each(this.menu, (item, idx) => {
        if( item.path === this.$route.path ){
          this.defaultSelectedKeysForMenu[0] = idx;
        }
      });
    },

    onMenuSelect(){
      
    },
    onClickItem(options){
      this.$router.push(this.menu[options.key].path);
    },
    handleMenuClick(options){
      if( options.key == '1' ){
        this.onLogout();
      }
    },
    async onLogout(){
      const { code, message } = await this.$http.post('/user/sign-out');
      if(code == 0){
        this.$cookies.remove(this.$GlobalConstants.loginCookieField);
        this.$cookies.remove(this.$GlobalConstants.loginUsername);
        this.$router.replace('/login');
      }else{
        this.$message.error(message);
      }
    }

  }
}

</script>
<style lang="scss" scoped>
.logo-w{ text-align: center; padding: 10px 0; }
</style>
