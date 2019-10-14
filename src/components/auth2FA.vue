<template>
  <div>
    <form @submit.prevent="checkAuth2FACode">
        <div class="row ">
        <div class="col-xs">
          <h2 class="header"> დამატებითი უსაფრთხოება</h2>
          <div style="display: inline-block; float: right; margin: 1em 1em 0 0">

          </div>
        </div>

      </div>
      <div class="row">
        <div class="col-xs">
          <div style="font-weight: 600;font-size: 1.1em; margin-left: 24px">შეიტანეთ მობილურ ტელეფონზე მიღებული
            უსაფრთხოების კოდი.
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs">
          <ui-textbox
            help="უსაფრთხოების კოდი"
            data-vv-as="უსაფრთხოების კოდი"
            :invalid="errors.has('auth2faCode')"
            :error="errors.first('auth2faCode')"
            v-validate="{required: true}"
            name="auth2faCode"
            autocomplete="off"
            :autofocus = "true"
            v-model="auth2faCode">
            <i slot="icon" class="fa fa-lock"></i>
          </ui-textbox>
        </div>
      </div>
      <hr>
      <div class="row ">
        <div class="col-xs-6 " style="text-align: left">
          <ui-button color="default" @click="prevPage" button-type="button">
            <div slot="icon"><i class="fas fa-2x fa-angle-left"></i></div>
            დაბრუნება
          </ui-button>
        </div>
        <div class="col-xs-6" style="text-align: right">
          <ui-button color="primary" icon-position="right" >
            გაგრძელება
            <div slot="icon"><i class="fas fa-2x fa-angle-right"></i></div>
          </ui-button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>

  import ServerValidationMixin from './mixinErrors'

  export default {
    name: 'auth2FA',
    mixins: [ServerValidationMixin],
    props: ['candidateId', 'clearCode'],
    data: function () {
      return {
        auth2faCode: '',

      }
    },
    mounted () {
      this.$validator.localize('ka')
    },
    methods: {
      async checkAuth2FACode () {
        try {
          let validationResult = await this.$validator.validateAll()
          if (validationResult) {
            let postData = {candidateId: this.candidateId, auth2faCode: this.auth2faCode, clearCode: this.clearCode};
            let postRes = await this.$axios.post(this.globalState.apiUrl + '/auth2fa-check', postData);

            if (this.ServerErrors(postRes)) {
              this.$emit('auth2fa', {error: true, message: this.errorMessages})
            } else {
              this.$emit('auth2fa', {error: false, auth2faCode: this.auth2faCode})
            }
          } else {
            this.$emit('auth2fa', {error: true, message: ''})
          }
        } catch (err) {
          this.$emit('auth2fa', {error: true, message: err.message})
        }
      },
      prevPage () {
        this.$emit('previous')
      }
    }

  }
</script>

<style scoped>

</style>
