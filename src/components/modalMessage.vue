<template>
    <div>
        <ui-modal ref="error-win" title="შეტყობინება" :dismissible="true" :prevent-shift="true">
            <div style="display: flex;">
                <div>

                </div>
                <div style="text-align: left;  margin-left: 0.5em ">
                    <h4 style="color: maroon"> {{errorMessage}}</h4>
                    <div>
                        {{info}}
                    </div>
                </div>
            </div>
        </ui-modal>
    </div>
</template>

<script>
   // import 'keen-ui/src/bootstrap';
    import UiModal from 'keen-ui/lib/UiModal';

    export default {
        components: {UiModal},

        name: 'modalMessage',
        props: ['errorMessage', 'info'],
        methods: {
            open() {
                this.$refs['error-win'].open()
            }
        }
    }
</script>

<style>
    .ui-modal__body {
        padding: 0;
        margin-bottom: 0
    }
</style>
