<template>
  <div>
    <bg></bg>
    <nav-bar shrinked="true" :menu="getMenu"></nav-bar>
    <div class="container" style="margin-top: 70px; text-align: left ">
      <login></login>
    </div>
  </div>
</template>

<script>
  import login from '../components/login'
  import navBar from '../components/navbar'
  import bg from '../components/background'
  import mixin1 from '../components/mixinMenu'



  export default {
    name: 'v-login',

    mixins: [mixin1],
    components: {
      'login': login,
      'nav-bar': navBar,
      'bg' : bg,
    },



  }
</script>
<style scoped>
</style>
