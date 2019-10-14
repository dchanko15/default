<template>
    <div>
        <nav-bar shrinked="true" :menu="getMenu()"></nav-bar>
        <bg></bg>
        <div class="container" style="padding-top: 55px; text-align: left; ">
            <entrant-reg></entrant-reg>
        </div>
    </div>
</template>

<script>
import registration from '../components/registration'
import navBar from '../components/navbar'
import bg from '../components/background'
import navMenu from '../components/mixinMenu'


export default {
  name: 'register',
  mixins:[navMenu],

  components: {
    'entrant-reg': registration,
    'nav-bar': navBar,
    'bg': bg
  },
  data: function() {
      let stage = this.$globalState.scheduleStages;
      return {
          allowedStages: [stage.reg],
      }
  },


}
</script>

<style scoped>
</style>
