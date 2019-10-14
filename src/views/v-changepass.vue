<template>
  <div>

    <nav-bar shrinked="true" :menu="getMenu()"></nav-bar>
    <bg></bg>
    <div class="container" style="margin-top: 75px; text-align: left ">
      <change-pass></change-pass>
    </div>
  </div>

</template>

<script>
  import bg from '../components/background'
  import changePass from '../components/changepass'
  import mixinSchedule from '../components/mixinMenu'
  import navBar from '../components/navbar'

  export default {
    name: 'vChangePass',
    mixins: [mixinSchedule],

    components: {
      'bg': bg,
      'change-pass': changePass,
      'nav-bar': navBar
    },
  }
</script>

<style scoped>

</style>
