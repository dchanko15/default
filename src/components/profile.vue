<template>
    <div>
        <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-12  col-lg-10">
                <section>
                    <div v-if="page===0">
                        <div class="row">
                            <div class="col-xs-12">
                                <h2 class="header">პროფილის რედაქტირება</h2>
                            </div>
                        </div>
                        <ui-tabs type="text">
                            <ui-tab title="სარეგისტრაციო ინფორმაცია">
                                <div>
                                    <form @submit.prevent="profileEditSubmit" data-vv-scope="form1">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <h4> პირადი ინფორმაცია</h4>
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="col-xs-12  col-md-6 ">
                                                <ui-textbox
                                                        help="პირადი ნომერი"
                                                        :invalid="errors.has('form1.IDNum')"
                                                        :error="errors.first('form1.IDNum')"
                                                        v-validate="{required: true,regex:/^[0-9]{11}$/}"
                                                        data-vv-as="პირადი ნომერი"
                                                        name="IDNum"
                                                        readonly
                                                        autocomplete="off"
                                                        v-model="IDNum">
                                                </ui-textbox>
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="col-xs-12 col-md-6 ">
                                                <ui-textbox
                                                        help="გვარი (ქართულად)"
                                                        v-validate="{required: true, min:2, regex: /^([\-ა-ჰ]+)$/} "
                                                        :invalid="errors.has('form1.lastName')"
                                                        :error="errors.first('form1.lastName')"
                                                        v-model="lastName"
                                                        data-vv-as="გვარი"
                                                        :readonly="readonly"
                                                        autocomplete="off"
                                                        name="lastName">
                                                </ui-textbox>
                                            </div>
                                            <div class="col-xs-12 col-md-6  ">
                                                <ui-textbox

                                                        help="სახელი (ქართულად)"
                                                        v-validate="{required: true, min:2, regex: /^([\-ა-ჰ]+)$/}"
                                                        :invalid="errors.has('form1.firstName')"
                                                        :error="errors.first('form1.firstName')"
                                                        v-model="firstName"
                                                        data-vv-as="სახელი"
                                                        :readonly="readonly"
                                                        autocomplete="off"
                                                        name="firstName">
                                                </ui-textbox>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <h4>საკონტაქტო ინფორმაცია</h4>
                                            </div>
                                            <div class="col-xs-12  col-md-6  ">
                                                <ui-textbox
                                                        help="ელ. ფოსტა"
                                                        :invalid="errors.has('form1.email')"
                                                        :error="errors.first('form1.email')"
                                                        v-validate="'required|email'"
                                                        data-vv-as="ელ. ფოსტა"
                                                        name="email"
                                                        autocomplete="off"
                                                        v-model="email">
                                                </ui-textbox>

                                            </div>
                                            <div class="col-xs-12  col-md-6  ">
                                                <ui-textbox
                                                        help="მობილურის ნომერი (5XXYYYYYY)"
                                                        :invalid="errors.has('form1.mobilePhone')"
                                                        :error="errors.first('form1.mobilePhone')"
                                                        v-validate="{required:true , regex:/^5[0-9]{8}$/}"
                                                        data-vv-as="მობილურის ნომერი"
                                                        name="mobilePhone"
                                                        autocomplete="off"
                                                        v-model="mobilePhone">
                                                </ui-textbox>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 ">
                                                <div style="font-size:0.9em; color: rgba(0,0,0,.54); ">
                                                    სისტემაში შესასვლელად გამოიყენეთ თქვენი ელ. ფოსტა
                                                    <strong>{{email ? ': '+email: ''}}</strong>
                                                </div>
                                            </div>
                                            <hr>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12  col-sm-12 ">
                                                <ui-checkbox v-model="specialConditions" true-value="1" false-value="0"
                                                             v-if="!readonly">
                                                    <div style="font-size:0.9em; color: rgba(0,0,0,.54); ">
                                                        გამოცდაზე მესაჭიროება სპეციალური პირობები <br>
                                                        (უნდა წარმოადგინოთ სამედიცინო ფორმა 100)
                                                    </div>
                                                </ui-checkbox>

                                            </div>
                                        </div>

                                        <hr>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12">
                                                <ui-checkbox v-model="auth2FA" true-value="1" false-value="0">
                                                    <div style="font-size:0.9em; color: rgba(0,0,0,.54); ">
                                                        დამატებითი უსაფრთხოება <br> (სისტემაში შესასვლელეად დამატებით
                                                        უნდა შეიტანოთ მობილურ ნომერზე გამოგზავნილი sms კოდი.)
                                                    </div>
                                                </ui-checkbox>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-xs " style="text-align: right">
                                                <ui-button color="primary" icon-position="right">
                                                    <div slot="icon">
                                                        <svg height="22px" width="22px" fill="white">
                                                            <use xlink:href="static/svgicons1.svg#icon-save"/>
                                                        </svg>
                                                    </div>
                                                    დამახსოვრება
                                                </ui-button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </ui-tab>
                            <ui-tab title="პაროლის შეცვლა">
                                <div>
                                    <form @submit.prevent="changePasswordSubmit" data-vv-scope="form2">


                                        <div class="row">
                                            <div class="col-xs-12">
                                                <h4>სისტემაში შესასვლელი პარამეტრები</h4>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col-xs-12 ">
                                                <span style="font-size:0.9em; color: rgba(0,0,0,.54); ">სისტემაში შესასვლელად გამოიყენეთ თქვენი ელ. ფოსტა
                                                    <strong>{{email ? ': '+email: ''}}</strong>
                                                </span>

                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-xs-12 ">
                                                <ui-textbox type="password"
                                                            help="ძველი პაროლი"
                                                            data-vv-as="ძველი პაროლი"
                                                            v-model="oldPassword"
                                                            name="oldPassword"
                                                            ref="oldPassword"
                                                            autocomplete="off"
                                                            v-validate="{required:true}"
                                                            :invalid="errors.has('form2.oldPassword')"
                                                            :error="errors.first('form2.oldPassword')">
                                                </ui-textbox>
                                            </div>

                                            <div class="col-xs-12 col-md-6">
                                                <ui-textbox type="password"
                                                            help="ახალი პაროლი (5-12 ლათინური სიმბოლო და ერთი ციფრი მაინც)"
                                                            v-model="newPassword"
                                                            data-vv-as="ახალი პაროლი"
                                                            autocomplete="off"
                                                            name="newPassword"
                                                            ref="newPassword"
                                                            v-validate="{required:true,regex: /^(?=.*\d)(?=.*[A-z]).{5,12}$/}"
                                                            :invalid="errors.has('form2.newPassword')"
                                                            :error="errors.first('form2.newPassword')">
                                                </ui-textbox>
                                            </div>
                                            <div class="col-xs-12 col-md-6">
                                                <ui-textbox type="password"
                                                            v-model="newPasswordConfirm"
                                                            data-vv-as="ახალი პაროლი ხელმეორედ"
                                                            help="ახალი პაროლი ხელმეორედ"
                                                            data-vv-on="blur"
                                                            autocomplete="off"
                                                            name="newPasswordConfirm"
                                                            v-validate="'required|confirmed:newPassword'"
                                                            :invalid="errors.has('form2.newPasswordConfirm')"
                                                            :error="errors.first('form2.newPasswordConfirm')">
                                                </ui-textbox>
                                            </div>

                                        </div>

                                        <hr>

                                        <div class="row">
                                            <div class="col-xs-12 " style="text-align: right">
                                                <ui-button color="primary" icon-position="right">
                                                    <div slot="icon">
                                                        <svg height="20px" width="20px" fill="white">
                                                            <use xlink:href="static/svgicons1.svg#icon-save"/>
                                                        </svg>
                                                    </div>
                                                    დამახსოვრება
                                                </ui-button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </ui-tab>
                        </ui-tabs>
                    </div>
                    <div v-else>
                        <auth2fa-check :candidate-id="candidateId" @auth2fa="auth2fa"
                                       @previous="page=0"></auth2fa-check>
                    </div>

                </section>
            </div>
        </div>
        <modal-message ref="server-errors" :error-messages="errorMessages"
                       info="გადაამოწმეთ შეტანილი ინფორმაცია"></modal-message>


    </div>
</template>

<script type="text/javascript">
    import ServerValidationMixin from './mixinErrors'
    import auth2FA from './auth2FA'
    import modalMessage from './modalMessage'


    export default {
        name: 'profileSchema',
        components: {
            'auth2fa-check': auth2FA,
            'modal-message': modalMessage,
        },
        mixins: [ServerValidationMixin],
        props: {
            readonly: 0
        },
        data: function () {
            return {
                caller: '',
                changePss: 0,
                payment: -1,
                lastName: '',
                firstName: '',
                IDNum: '',
                mobilePhone: '',
                oldMobilePhone: '',
                birthDate: '',
                oldPassword: '',
                newPassword: '',
                email: '',
                newPasswordConfirm: '',
                page: 0,
                candidateId: 0,
                auth2FA: '0',
                oldAuth2FA: '0',
                specialConditions: '0',
                auth2faCode: '',
                globalState,
            }
        },
        computed: {
            signed: function () {
                console.log('disclaimer', this.disclaimer)
                return this.disclaimer
            },
        },
        async mounted() {
            this.$validator.localize('ka', {
               /* attributes: {
                    'lastName': 'გვარი',
                    'firstName': 'სახელი',
                    'IDNum': 'პირადი ნომერი',
                    'mobilePhone': 'მობილურის ნომერი',
                    'birthDate': 'დაბადების თარიღი',
                    'email': 'ელ. ფოსტა',
                    'password': 'პაროლი',
                    'passwordConfirm': 'პაროლი ხელმეორედ',
                    'usernameType': 'მომხმარებლის სახელი',
                },*/
                custom: {
                    'lastName': {
                        regex: () => 'გვარი შეიტანეთ ქართულად.'
                    },
                    'firstName': {
                        regex: () => 'სახელი შეიტანეთ ქართულად.'
                    },
                    'IDNum': {
                        regex: () => 'პირადი ნომერი 11 ციფრი უნდა იყოს.'
                    },
                    'password': {
                        regex: () => 'პაროლი უნდა იყოს 5-დან 12 სიმბოლომდე, აუცილებლად უნდა შეიცავდეს ერთ ციფრს მაინც. \n' +
                            'დასაშვებია მხოლოდ ლათინური სიმბოლოები და ციფრები.'
                    }
                }

            });

            let response = await this.$axios.post(this.$globalState.apiUrl + '/reg-data', {candidateId: this.$globalState.user.candidateId});

            if (this.ServerErrors(response)) {
                this.showErrors()
            } else {
                let results = response.data;

                Object.assign(this.$data, results[0])
                this.oldMobilePhone = this.mobilePhone
                this.oldAuth2FA = this.auth2FA
            }

        },
        methods: {
            async profileEditSubmit() {
                try {
                    let validationResult = await this.$validator.validate('form1.*')
                    if (validationResult) {
                        if (+this.auth2FA === 0) {
                            this.saveProfile()
                        } else {
                            this.caller = 'profileEdit'
                            this.getSmsCode()
                        }
                    } else {
                        this.showErrors('')
                    }
                } catch (err) {
                    this.showErrors(err.message)

                }

            },
            async saveProfile(auth2faCode = '0000') {
                let {candidateId, email, lastName, firstName, mobilePhone, specialConditions, oldMobilePhone, auth2FA} = this.$data

                let postRes = await this.$axios.post(this.$globalState.apiUrl + '/update-profile', {
                    candidateId,
                    email,
                    lastName,
                    firstName,
                    mobilePhone,
                    specialConditions,
                    oldMobilePhone,
                    auth2FA,
                    auth2faCode
                });
                let results = postRes.data;
                if (this.ServerErrors(postRes)) {
                    this.showErrors()
                } else {
                    this.candidateId = +results.candidateId;
                    this.$router.push('/home')
                }

            },

            async changePasswordSubmit() {
                // if (+this.changePss !== 1)
                //     return;

                let validationResult = await this.$validator.validate('form2.*');
                if (!validationResult) {
                    this.showErrors()
                } else {
                    if (+this.auth2FA === 0) {
                        this.updatePassword()
                    } else {
                        this.caller = 'changePass';
                        this.getSmsCode()
                    }
                }

            },

            async updatePassword(auth2faCode = '0000') {
                let {candidateId, oldPassword, newPassword, newPasswordConfirm, auth2FA} = this.$data;
                let postRes = await this.$axios.post(this.$globalState.apiUrl + '/update-password', {
                    candidateId,
                    oldPassword,
                    newPassword,
                    newPasswordConfirm,
                    auth2FA,
                    auth2faCode
                });
                // let results = postRes.data;
                if (this.ServerErrors(postRes)) {
                    this.showErrors()
                } else {
                    this.$router.push('/home')
                }
            },

            async auth2fa(eventData) {
                let msg = eventData.message;
                if (eventData.error) {
                    if (Array.isArray(msg)) {
                        this.errorMessages.length = 0;
                        msg.forEach(err => this.errorMessages.push(err));
                        this.showErrors()
                    } else {
                        this.showErrors(msg)
                    }
                } else {
                    let auth2faCode = eventData.auth2faCode;
                    switch (this.caller) {
                        case 'profileEdit':
                            await this.saveProfile(auth2faCode);
                            break;
                        case 'changePass':
                            await this.updatePassword(auth2faCode);
                            break;
                    }

                }
            },
            async getSmsCode() {
                try {
                    let {candidateId, oldMobilePhone, mobilePhone} = this.$data;
                    let postRes = await this.$axios.post(this.$globalState.apiUrl + '/send-code', {
                        candidateId,
                        mobilePhone,
                        oldMobilePhone
                    });

                    if (this.ServerErrors(postRes)) {
                        this.showErrors()
                    } else {
                        this.page = 2
                    }
                } catch (err) {
                    this.showErrors(err.message)
                }
            }

        }

    }
</script>
<style scoped>
    .header {
        margin-top: 0.5vh;
    }

    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
