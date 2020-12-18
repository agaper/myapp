<template>
  <div>
     <router-view />
  </div>
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
      defaultSelectedKeysForMenu: [],
      menu: menu
    }
  },
  watch: {
    '$route.path'(){
      // this.setupDefaultSelectedKeysForMenu();  
    }
  },
  created() {
    
  },
  methods: {
    
    setupDefaultSelectedKeysForMenu(){
      _.each(this.menu, (item, idx) => {
        if( item.path === this.$route.path ){
          this.defaultSelectedKeysForMenu[0] = idx;
        }
      });
    },

    onClickItem(options){
      this.$router.push(this.menu[options.key].path);
    },

    handleMenuClick(options){
      if( options.key == '1' ){
        this.onLogout();
      }
    },

    

  }
}

</script>
<style lang="scss" scoped>

</style>
