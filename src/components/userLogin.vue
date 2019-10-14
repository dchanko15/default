<template>
    <div>
        <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-7">
                <section>
                    <div>
                        <form @submit.prevent="loginSubmit">
                            <div class="row ">
                                <div class="col-xs">
                                    <h2 class="header"> ავტორიზაცია</h2>
                                </div>
                            </div>

                            <div class="row ">
                                <div class="col-xs">
                                    <ui-textbox
                                            help="მომხმარებელი"
                                            :invalid="errors.has('userName')"
                                            :error="errors.first('userName')"
                                            v-validate="{required: true}"
                                            data-vv-as="მომხმარებელი"
                                            name="userName"
                                            autocomplete="off"
                                            :autofocus="true"
                                            v-model="userName">
                                    </ui-textbox>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs">
                                    <ui-textbox type="password"
                                                help="პაროლი"
                                                v-model="password"
                                                name="password"
                                                ref="password"
                                                v-validate="{required:true}"
                                                data-vv-as="პაროლი"
                                                :invalid="errors.has('password')"
                                                :error="errors.first('password')">
                                        <!--     <i slot="icon" class="fa fa-key"></i>-->

                                    </ui-textbox>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-xs" style="text-align: right">
                                    <ui-button color="primary" icon-position="right">
                                        <!-- <div slot="icon">
                                           <i class="fas fa-2x fa-sign-in-alt"></i>
                                         </div>
                                         -->
                                        ავტორიზაცია
                                        <div slot="icon">
                                            <svg height="20px" width="20px" fill="white">
                                                <use xlink:href="svgicons1.svg#icon-log-in"/>
                                            </svg>
                                        </div>


                                    </ui-button>
                                </div>
                            </div>
                        </form>
                        <hr>
                    </div>
                </section>
            </div>

        </div>
        <modal-message ref="server-errors" :error-messages="errorMessages"
                       info="გადაამოწმეთ შეტანილი ინფორმაცია"></modal-message>
    </div>
</template>

<script>
    import ServerValidationMixin from './mixinErrors'
    import modalMessage from './modalMessage'


    export default {
        name: 'serLogin',
        mixins: [ServerValidationMixin],
        components: {
            'modal-message': modalMessage,
        },
        data: function () {
            return {
                userName: '',
                password: '',
                userId: 0,
                role: 0,
            }
        },
        mounted () {
           // this.$validator.localize('ka')
        },
        methods: {
            async loginSubmit() {
                try {
                    let validationResult = await this.$validator.validateAll();
                    if (validationResult) {
                        this.$router.push('/accommodation');
                       /* let postData = {userName: this.userName, password: this.password};
                        let postRes = await this.$axios.post(this.$globalState.apiUrl + '/login', postData);
                        let results = postRes.data;
                        if (this.ServerErrors(postRes)) {
                            this.displayErrors()
                        } else {

                            this.userId = +results.userId;
                            this.role = +results.role;
                            this.loginSuccess();
                        }*/

                    } else {
                        this.displayErrors('')
                    }
                } catch (err) {
                    this.displayErrors(err.message)
                }
            },

            loginSuccess() {
                this.$globalState.user.userId = this.userId;
                this.$globalState.user.role = this.role;
                this.$router.push('/reg-data');
            },
        }

    }
</script>

<style scoped>

</style>
