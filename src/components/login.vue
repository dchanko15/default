<template>
  <div>
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-12 col-md-10  col-lg-8">
        <section >
          <div v-if="page===0">
            <form @submit.prevent="loginSubmit">
              <div class="row ">
                <div class="col-xs">
                  <h2 class="header"> ავტორიზაცია</h2>
                </div>
              </div>

              <div class="row ">
                <div class="col-xs">
                  <ui-textbox
                    help="ელ.ფოსტის მისამართი"
                    :invalid="errors.has('email')"
                    :error="errors.first('email')"
                    v-validate="{required: true, email: true}"
                    data-vv-as="ელ.ფოსტის მისამართი"
                    name="email"
                    autocomplete="off"
                    :autofocus = "true"
                    v-model="email">
                    <!--                  <i slot="icon" class="fa fa-at"></i>-->
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
          <div v-else>
            <auth2fa-check :candidate-id="candidateId" :clear-code="1" @auth2fa="auth2faCheck"
                           @previous="page=0"></auth2fa-check>
          </div>
          <ui-button button-type="button" type="secondary" color="primary" @click="restorePass"
                     v-if="!auth2fa">
            დაგავიწყდათ პაროლი?
          </ui-button>
        </section>
      </div>

    </div>
    <modal-message ref="errors-modal" :error-messages="errorMessages"
                   info="გადაამოწმეთ შეტანილი ინფორმაცია"></modal-message>
  </div>
</template>

<script>
  import ServerValidationMixin from './mixinErrors'
  import auth2FA from './auth2FA'
  import modalMessage from './modalMessage'


  export default {
    name: 'login',
    mixins: [ServerValidationMixin],
    components: {
      'auth2fa-check': auth2FA,
      'modal-message': modalMessage,
    },
    data: function () {
      return {
        email: '',
        password: '',
        candidateId: 0,
        step: 0,
        auth2fa: 0,
        auth2faCode: '',
        role: 0,
        page: 0,
      }
    },
 /*   mounted () {
      this.$validator.localize('ka')
    },*/
    methods: {
      async loginSubmit () {
        try {
          let validationResult = await this.$validator.validateAll();
          if (validationResult) {

            let postData = {email: this.email, password: this.password};
            loginSuccess();
            return;

            let postRes = await this.$axios.post(this.$globalState.apiUrl + '/login', postData);
            let results = postRes.data;
            if (this.ServerErrors(postRes)) {
              this.showErrors()
            } else {
              this.auth2fa = +results.auth2fa;
              this.candidateId = +results.candidateId;
              this.role = +results.role;
              this.$globalState.scheduleTable = results.schedule;

              if (this.auth2fa === 0) {
                this.loginSuccess()
              } else {
                this.page = 1
              }

            }
          } else {
            this.showErrors('')
          }
        } catch (err) {
          this.showErrors(err.message)
        }
      },

      restorePass () {
        this.$router.push('/change-pass')
      },
      loginSuccess () {
        this.$globalState.user.candidateId = this.candidateId;
        this.$globalState.user.role = this.role;
        this.$globalState.user.lastName = "ჭანკოტაძე";
        this.$globalState.user.firstName = "დათო";
        //this.$router.push('/home')
      },
      auth2faCheck (eventData) {
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
          this.loginSuccess()
        }
      },

    }

  }
</script>

<style scoped>

</style>
