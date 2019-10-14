<template>
    <div>
        <bg></bg>
        <nav-bar shrinked="" :menu="getMenu()"></nav-bar>
        <div class="container" style="margin-top: 70px; text-align: left ">

        </div>
    </div>
</template>

<script>
    import navBar from '../components/navbar'
    import bg from '../components/background'
    import mixinMenu from '../components/mixinMenu'

    export default {
        name: "v-index",
        components: {
            'nav-bar': navBar,
            'bg': bg,
        },
        mixins: [mixinMenu]
    }
</script>

<style scoped>

</style>
