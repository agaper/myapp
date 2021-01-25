<template>
  <div>
     <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      
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
    
  }
}

</script>
<style lang="scss" scoped>

</style>
