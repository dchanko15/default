<template>
    <div id="app">
        <keep-alive :include="['v-results', 'v-entrantScores']" v-if="!$globalState.reload">
            <router-view/>
        </keep-alive>
        <router-view v-else></router-view>

    </div>
</template>
<script>
    export default {


    }
</script>
<style lang="scss">

</style>
