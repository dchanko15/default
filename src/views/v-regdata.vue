<template>
    <div>
        <bg></bg>
        <nav-bar shrinked="true" :menu="getMenu"></nav-bar>

        <div class="container" style="margin-top: 80px; text-align: left ">
            <reg-data></reg-data>
        </div>


    </div>
</template>

<script>
    import regData from '../components/regdata'
    import navBar from '../components/navbar'
    import bg from '../components/background'
    import mixin1 from '../components/mixinMenu'

    export default {
        name: 'v-regdata',

        mixins: [mixin1],
        components: {
            'reg-data': regData,
            'nav-bar': navBar,
            'bg': bg,
        },


    }
</script>
<style scoped>
</style>
