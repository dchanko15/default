<template>
    <div>
        <section style="background-color: white; opacity: 0.95; text-align: left; min-height: 75vh">
            <div>
                <h2 style="margin:0">გააგრძელე სწავლა საქართველოში</h2>
                <h3 style="margin-top:0.5em">აპლიკანტის ძიება</h3>
            </div>
            <form @submit.prevent="search">
                <div class="row middle-xs">

                    <div class="col-xs-6 col-sm-3">
                        <ui-textbox
                                help="პირადი ნომერი"
                                data-vv-as="პირადი ნომერი"
                                v-validate="{required: true, regex: /\d{11}/}"
                                :invalid="errors.has('idNum')"
                                :error="errors.first('idNum')"
                                data-vv-name="idNum"
                                @focus="clearSearchResults"
                                v-model="idNum">
                        </ui-textbox>
                    </div>

                    <input ref="hField" type="text" style="width:0; height: 0; position:fixed; top:-10px">
                    <div class="col-xs-6 col-sm-3">
                        <ui-icon-button type="primary" button-type="submit" icon="search"></ui-icon-button>
                    </div>

                </div>
            </form>
            <div v-show=" !!showSearchRes">
                <div class="row">
                    <div class="col-xs-12 ">
                        <h4>აპლიკანტი რეგისტრირებულია</h4>
                    </div>
                    <div class="col-xs-12 ">
                        <table>
                            <tr>
                                <td>
                                    გვარი:
                                </td>
                                <td>
                                    {{lastName}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    სახელი:
                                </td>
                                <td>
                                    {{firstName}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ტელეფონი:
                                </td>
                                <td>
                                    {{phone}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ელ.ფოსტა:
                                </td>
                                <td>
                                    {{email}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    რეგისტრაციის<br>თარიღი:
                                </td>
                                <td>
                                    {{ regDate }}
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>

                <div class="row" v-show="distrib.length>0">
                    <div class="col-xs-12">
                        <h4>მოსაწვევი ბარათი</h4>
                    </div>
                    <div class="col-xs-12">
                        <div style="display: table">
                            <div style="display: table-row; " v-for="exam in distrib" :key="exam.distributionId">
                                <div style="display: table-cell; padding:10px; border: 1px solid silver; border-collapse: collapse">
                                    {{exam.testName}}
                                </div>
                                <div style="display: table-cell; padding:10px; border: 1px solid silver; border-collapse: collapse">
                                    {{exam.sessionDate}}
                                </div>
                                <div style="display: table-cell; padding:10px; border: 1px solid silver; border-collapse: collapse">
                                    {{exam.examCenterName}}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
        <modal-message ref="server-errors" :error-messages="errorMessages"
                       info="გადაამოწმეთ შეტანილი ინფორმაცია"></modal-message>
    </div>

</template>

<script>
    import ServerValidationMixin from './mixinErrors'
    import modalMessage from './modalMessage'

    export default {
        name: "regData",
        mixins: [ServerValidationMixin],
        components: {
            'modal-message': modalMessage,
        },

        data: () => {
            return {
                idNum: "",
                lastName: "",
                firstName: "",
                phone: "",
                email: "",
                regDate: "",
                showSearchRes: 0,
                distrib: []

            }
        },
        methods: {
            async search() {

                try {
                    let response = await this.$axios(this.$globalState.apiUrl + '/reg-data', {params: {idNum: this.idNum}});
                    if (response.data) {
                        if (this.ServerErrors(response)) {
                            this.displayErrors();
                        } else {
                            Object.assign(this.$data, response.data);
                            this.showSearchRes = 1;
                            this.$refs.hField.focus();
                            this.$nextTick(() => {
                                this.$refs.hField.focus()
                            })
                        }
                    }
                } catch (e) {

                } finally {

                }

            },
            clearSearchResults() {
                this.showSearchRes = 0;
            }
        },
    }
</script>

<style scoped>
    td {
        padding-right: 15px;
    }
</style>
