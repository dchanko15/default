<template>
  <div>
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-12 col-md-12  col-lg-10">
        <section >

          <div class="row ">
            <div class="col-xs">
              <h2 class="header"> პაროლის შეცვლა / აღდგენა </h2>
            </div>
          </div>
          <div v-if="step===0">
            <form @submit.prevent="sendCodeSubmit" data-vv-scope="form1">
              <div class="row">
                <div class="col-xs-12 col-md-10">
                  <span class="font-bold">
                    შეიტანეთ  რეგისტრაციის დროს მითითებული მონაცემები
                  </span>
                </div>
                <div class="col-xs-12  col-md-6 ">
                  <ui-textbox
                    :invalid="errors.has('form1.IDNum')"
                    :error="errors.first('form1.IDNum')"
                    v-validate="{required: true, regex:/^[0-9]{11}$/}"
                    data-vv-as="პირადი ნომერი"
                    name="IDNum"
                    help="პირადი ნომერი"
                    autocomplete="off"
                    v-model="IDNum">
                  </ui-textbox>
                </div>
                <div class="col-xs-12  col-md-6  ">
                  <ui-textbox
                    :invalid="errors.has('form1.mobilePhone')"
                    :error="errors.first('form1.mobilePhone')"
                    v-validate="{required:true , regex:/^5[0-9]{8}$/}"
                    name="mobilePhone"
                    help="მობილურის ნომერი (5XXYYYYYY)"
                    data-vv-as ="მობილურის ნომერი"
                    v-model="mobilePhone">
                  </ui-textbox>
                </div>

                <div class="col-xs-12 col-md-6 ">
                  <ui-button icon-position="right">
                    კოდის გამოგზავნა
                    <div slot="icon">
                      <svg height="19px" width="19px" fill="#222" >
                        <use y="2" xlink:href="svgicons1.svg#icon-send"/>
                      </svg>
                    </div>
                  </ui-button>
                </div>
                <div class="col-xs-12 ">
                  <h4>
                    პაროლის შესაცვლელი კოდი გამოიგზავნება რეგისტრაციის დროს მითითებულ ელ. ფოსტასა და მობილურ
                    ტელეფონზე
                  </h4>
                </div>
              </div>
            </form>
          </div>
          <div v-if="step===1">
            <form @submit.prevent="changePassSubmit" data-vv-scope="changePass">
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <ui-textbox
                    help="პაროლის შესაცვლელი კოდი"
                    data-vv-as="პაროლის შესაცვლელი კოდი"
                    v-model="auth2FACode"
                    name="smsCode"
                    v-validate="{required:true}"
                    :invalid="errors.has('changePass.auth2FACode')"
                    :error="errors.first('changePass.auth2FACode')">
                  </ui-textbox>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <ui-textbox type="password"
                              help="ახალი პაროლი (5-12 ლათინური სიმბოლო და ერთი ციფრი მაინც)"
                              v-model="password"
                              name="password"
                              ref="password"
                              v-validate="{required:true,regex: /^(?=.*\d)(?=.*[A-z]).{5,12}$/}"
                              :invalid="errors.has('changePass.password')"
                              :error="errors.first('changePass.password')">
                  </ui-textbox>
                </div>
                <div class="col-xs-12 col-md-6">
                  <ui-textbox type="password"
                              v-model="passwordConfirm"
                              help="ახალი პაროლი ხელმეორედ"
                              name="passwordConfirm"
                              v-validate="'required|confirmed:password'"
                              :invalid="errors.has('changePass.passwordConfirm')"
                              :error="errors.first('changePass.passwordConfirm')">
                  </ui-textbox>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-xs-6 " style="text-align: left">
                  <ui-button color="primary" @click="prevPage" button-type="button">
                    <div slot="icon"><i class="fas fa-2x fa-angle-left"></i></div>
                    დაბრუნება
                  </ui-button>
                </div>
                <div class="col-xs-6 " style="text-align: right">
                  <ui-button color="primary" icon-position="right">
                    <div slot="icon"><i class="fas fa-2x fa-save"></i></div>
                    შენახვა
                  </ui-button>
                </div>
              </div>
            </form>
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
    name: 'changepass',
    mixins: [ServerValidationMixin],
    components: {
      'modal-message': modalMessage,
    },
    data: () => {
      return {
        candidateId: 0,
        password: '',
        passwordConfirm: '',
        step: 0,
        sendTo: 'email',
        email: '',
        mobilePhone: '',
        auth2FACode: '',
        IDNum: '',
      }
    },
    mounted () {
      this.$validator.localize('ka', {
        attributes: {
          'password': 'ახალი პაროლი',
          'passwordConfirm': 'ახალი პაროლი ხელმეორედ',
        },
        custom: {
          'IDNum': {
            regex: () => 'პირადი ნომერი 11 ციფრი უნდა იყოს'
          },
          'password': {
            regex: () => 'ახალი პაროლი უნდა იყოს 5-დან 12 სიმბოლომდე, აუცილებლად უნდა შეიცავდეს ერთ ციფრს მაინც. \n' +
              'დასაშვებია მხოლოდ ლათინური სიმბოლოები და ციფრები.'
          }
        }
      })
    },
    methods: {
      async sendCodeSubmit () {
        let validationResult = true;
        let postRes;

        try {

          validationResult = await this.$validator.validate('form1.*');
          let postData = {IDNum: this.IDNum, mobilePhone: this.mobilePhone};

          if (validationResult) {
            postRes = await this.$axios.post(this.globalState.apiUrl + '/send-code1', postData);
            if (this.ServerErrors(postRes)) {
              this.showErrors();
            } else {
              let results = postRes.data;
              this.candidateId = +results.candidateId;
              this.step = 1;
            }
          } else {
            this.showErrors('');
          }
        } catch (err) {
          this.showErrors(err.message);
        }
      },

      async changePassSubmit () {
        let postRes;
        try {
          let validationResult = await this.$validator.validate('changePass.*');
          if (validationResult) {
            let {candidateId, password, passwordConfirm, auth2FACode} = this.$data;

            if (+candidateId > 0) {
              postRes = await this.$axios.post(this.globalState.apiUrl + '/change-pass', {
                candidateId,
                password,
                passwordConfirm,
                auth2FACode
              });
              if (this.ServerErrors(postRes)) {
                this.showErrors();
              } else {
                this.$router.push('/login');
              }
            } else {
              this.showErrors('');
            }
          }
        } catch (err) {
          this.showErrors(err.message);
        }
      },

      prevPage () {
        this.step--;
      },

    }
  }
</script>

<style scoped>

</style>
