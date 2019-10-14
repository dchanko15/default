<template>
    <div>
        <bg></bg>
        <div class="container" style="margin-top: 50px; text-align: left; ">
            <accommodation></accommodation>
        </div>


    </div>
</template>

<script>

    import accommodation from '../components/accommodation'
    import bg from '../components/background'
    import navBar from '../components/navbar'


    export default {
        name: 'v-accommodation',
        components: {
            'accommodation': accommodation,
            'nav-bar': navBar,
            'bg': bg,
        },
    }
</script>
<style scoped>
</style>
