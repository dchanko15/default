<template>
    <div>
        <navbar shrinked="true" :menu="getMenu()"></navbar>
        <div class="container" style="margin-top: 75px; text-align: left ">
            <profile :readonly="menuOptions.readonly"></profile>
        </div>
    </div>

</template>

<script>
    import navbar from '../components/navbar'
    import profile from '../components/profile'
    import mixin1 from '../components/mixinMenu'


    export default {
        name: 'v-profile',
        components: {
            'navbar': navbar,
            'profile': profile,
        },
        mixins: [mixin1],
        data: function () {
            let stage = this.$globalState.scheduleStages;
            return {
                allowedStages: [stage.reg, stage.distrib, stage.card, stage.exam, stage.marking, stage.res],
            }
        },
        created() {
            this.validateStage(this.allowedStages);
        }
    }
</script>
<style scoped>
</style>
