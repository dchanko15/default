<template>

    <div>
        <div class="table row center-lg" v-if="listView===1">
            <div class="col-xs-12 end-xs" style="margin: 5px 0">
                <ui-button type="primary" button-type="button" color="primary" icon="add_circle_outline"
                           @click="addNew">
                    დამატება
                </ui-button>
            </div>
            <div class=" col-sm-12 col-md-12 tablebody ">
                <div class="row hidden-xs hidden-sm hidden-md theader middle-xs"
                     style="border-bottom: 1px solid silver; padding: 3px; background-color: #234d59; color:whitesmoke">
                    <div class="col-sm-12 end-lg col-lg">
                        ოთახის ნომერი
                    </div>
                    <div class="col-sm-12 center-lg col-lg">
                        შემოსვლის თარიღი
                    </div>
                    <div class="col-sm-12 center-lg  col-lg">
                        გასვლის თარიღი
                    </div>
                    <div class="col-sm-12 end-lg col-lg">
                        ნომრის ღირებულება ღამეში
                    </div>
                    <div class="col-sm-12 end-lg col-lg">
                        შუამავალი კომპანია
                    </div>
                    <div class="col-sm-12 end-lg col-lg">
                        საკომისიო (%)
                    </div>
                    <div class="col-sm-12 end-lg col-lg">
                        საკომისიო
                    </div>
                    <div class="col-sm-12 end-lg col-lg">
                        შემოსავალი ნომერზე დღგ-ს და საკომისიოს გარეშე
                    </div>

                </div>
                <div class="row" v-for="row in dataRows" :key="row.Id" @click="selectRow(row)"
                     style="border-bottom: 1px solid silver; padding: 3px">

                    <div class="col-lg  end-lg">
                        <span class=" hidden-lg hidden-xl color-gray">
                            ოთახის ნომერი:
                        </span>
                        {{row.roomId}}
                    </div>
                    <div class="col-lg center-lg">
                         <span class=" hidden-lg hidden-xl color-gray">
                            შემოსვლის თარიღი:
                        </span>
                        {{row.checkIn}}
                    </div>
                    <div class="col-lg center-lg">
                        <span class="hidden-lg hidden-xl color-gray">
                           გასვლის თარიღი:
                        </span>
                        {{row.checkOut}}
                    </div>
                    <div class="col-lg end-lg">
                        <span class=" hidden-lg hidden-xl color-gray">
                            ნომრის ღირებულება ღამეში:
                        </span>
                        {{row.dayRate | financial}}
                    </div>
                    <div class="col-lg end-lg">
                        <span class=" hidden-lg hidden-xl color-gray">
                            შუამავალი კომპანია:
                        </span>
                        {{ agencyName(row.travelAgencyId)}}
                    </div>
                    <div class="col-lg end-lg">
                        <span class=" hidden-lg hidden-xl color-gray">
                            საკომისიო (%):
                        </span>
                        {{ row.commissionPercent | financial }}
                    </div>
                    <div class="col-lg end-lg">
                        <span class=" hidden-lg hidden-xl color-gray">
                            საკომისიო:
                        </span>
                        {{ row.commission | financial}}
                    </div>
                    <div class="col-lg end-lg">
                        <span class="hidden-lg hidden-xl color-gray">
                            შემოსავალი ნომერზე დღგ-ს და საკომისიოს გარეშე:
                        </span>
                        {{ row.income | financial}}
                    </div>
                </div>
            </div>
        </div>
        <div class="row end-xs end-sm end-md center-lg" v-else>
            <div class=" col-md-9 col-lg-8">
                <section style="min-height:  500px">
                    <h2>შეაყვანი ინფორმაცია</h2>
                    <form @submit.prevent="submit">
                        <div class="row">
                            <div class="col-xs-12">
                                <ui-textbox
                                        name="currRow.roomId"
                                        help="ოთახის ნომერი"
                                        autocomplete="off"
                                        data-vv-as="ოთახის ნომერი"

                                        :invalid="errors.has('currRow.roomId')"
                                        :error="errors.first('currRow.roomId')"
                                        v-validate="'required'"
                                        v-model="currRow.roomId">
                                </ui-textbox>
                            </div>
                            <div class="col-xs-12">
                                <ui-textbox
                                        name="currRow.checkIn"
                                        help="შემოსვლის თარიღი"
                                        autocomplete="off"
                                        data-vv-as="შემოსვლის თარიღი"
                                        :invalid="errors.has('currRow.checkIn')"
                                        :error="errors.first('currRow.checkIn')"
                                        v-validate="'required|date_format:DD/MM/YYYY'"
                                        v-model="currRow.checkIn">
                                </ui-textbox>
                            </div>
                            <div class="col-xs-12">
                                <ui-textbox
                                        name="currRow.checkOut"
                                        help="გასვლის თარიღი"
                                        autocomplete="off"
                                        @blur="reCalcIncome"
                                        data-vv-as="გასვლის თარიღი"
                                        :invalid="errors.has('currRow.checkOut')"
                                        :error="errors.first('currRow.checkOut')"
                                        v-validate="'required|date_format:DD/MM/YYYY'"
                                        v-model="currRow.checkOut">
                                </ui-textbox>
                            </div>
                            <div class="col-xs-12">
                                <ui-textbox
                                        name="currRow.dayRate"
                                        help="ნომრის ღირებულება ღამეში"
                                        autocomplete="off"
                                        @blur="reCalcIncome"
                                        data-vv-as="ნომრის ღირებულება ღამეში"
                                        v-validate="{required: true, decimal: 2 }"
                                        :invalid="errors.has('currRow.dayRate')"
                                        :error="errors.first('currRow.dayRate')"
                                        v-model="currRow.dayRate">
                                </ui-textbox>
                            </div>
                            <div class="col-xs-12">
                                <ui-select
                                        name="travelAgency"
                                        help="შუამავალი კომპანია"
                                        autocomplete="off"
                                        data-vv-as="შუამავალი კომპანია"
                                        v-validate="{required: true}"
                                        :invalid="errors.has('travelAgency')"
                                        :error="errors.first('travelAgency')"
                                        :options="agencies"
                                        v-model="travelAgency"
                                        @select="reCalcIncome"
                                ></ui-select>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <ui-textbox
                                        readonly
                                        name="currRow.commissionPercent"
                                        help="შუამავალი კომპანის საკომისიო %"


                                        v-model="currRow.commissionPercent">
                                </ui-textbox>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <ui-textbox
                                        readonly
                                        name="currRow.commission"
                                        help="შუამავალი კომპანის საკომისიო "


                                        v-model="currRow.commission">
                                </ui-textbox>
                            </div>
                            <div class="col-xs-12">
                                <ui-textbox
                                        readonly
                                        name="currRow.income"
                                        help="შემოსავალი ნომერზე დღგ-ს და ტურსიტულის საკომისიოს გარეშე"

                                        v-model="currRow.income">
                                </ui-textbox>
                            </div>

                        </div>
                        <div class="row ">
                            <div class="col-xs-6 ">
                                <ui-button type="primary" button-type="button" icon="keyboard_arrow_left"
                                           @click="listView=1">
                                    დაბრუნება
                                </ui-button>
                            </div>
                            <div class="col-xs-6 end-xs">
                                <ui-button type="primary" color="primary" icon="save">
                                    შენახვა
                                </ui-button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

        </div>

        <modal-win ref="errors-modal" :error-messages="errorMessages"></modal-win>
    </div>

</template>

<script>


    let t = [
        {
            Id: 19,
            roomId: 1,
            checkIn: '01/02/2019',
            checkOut: '05/02/2019',
            dayRate: 100,
            travelAgencyId: 1,
            totalPrice: 400,
            commissionPercent: 15.00,
            commission: 60.00,
            income: 278.98
        },
        {
            Id: 2,
            roomId: 2,
            checkIn: '01/02/2019',
            checkOut: '05/02/2019',
            dayRate: 250,
            travelAgencyId: 0,
            totalPrice: 1000,
            commissionPercent: 0.00,

            commission: 0.00,
            income: 847.46
        }
    ];

    import moment from 'moment';
    import modalWin from './modalMessage';
    import displayErrors from './mixinErrors';


    export default {
        name: "accommodation",
        components: {
            'modal-win': modalWin,
        },
        mixins: [displayErrors],
        data: () => {
            return {
                dataRows: [{
                    Id: Number,
                    roomId: Number,
                    checkIn: String,
                    checkOut: String,
                    dayRate: Number,
                    travelAgencyId: Number,
                    totalPrice: Number,
                    commission: Number,
                    income: Number
                }],
                currRow: {
                    Id: Number,
                    roomId: Number,
                    checkIn: String,
                    checkOut: String,
                    dayRate: Number,
                    travelAgencyId: Number,
                    totalPrice: Number,
                    commission: Number,
                    income: Number
                },

                listView: 1,

                Id: -1,
                roomId: "",
                checkIn: "",
                checkOut: "",
                dayRate: "",
                travelAgency: -1,
                totalPrice: "",
                commissionPercent: "",
                commission: "",
                income: "",
                travelAgencies: [
                    {value: 0, label: 'შუამავლის გარეშე', commission: ''},
                    {value: 1, label: 'booking.com', commission: 15},
                    {value: 2, label: 'expedia.com', commission: 10}]
            }
        },
        created() {
            this.dataRows = t;
        },
        computed: {
            agencies: function () {
                return this.travelAgencies;
            }
        },
        filters: {
            financial: function (x) {
                return Number.parseFloat(x).toFixed(2)
            }

        },

        methods: {
            isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            },
            agencyName: function (val) {
                let t = this.travelAgencies.find(el => el.value === val);
                return t && t.label;
            },

            reCalcIncome(selOp) {
                let commissionPercent = this.travelAgency && this.travelAgency.commission || 0;
                this.currRow.commissionPercent = commissionPercent.toFixed(2);
                if (this.currRow.checkIn && this.currRow.checkOut && this.currRow.dayRate) {

                    let checkIn = moment(this.currRow.checkIn, "DD/MM/YYYY");
                    let checkOut = moment(this.currRow.checkOut, "DD/MM/YYYY");
                    let days = checkOut.diff(checkIn, "day");

                    this.currRow.commission = (commissionPercent * this.currRow.dayRate / 100 * days).toFixed(2);
                    this.currRow.income = (days * this.currRow.dayRate / 1.18 - (this.currRow.commission || 0)).toFixed(2);
                }

            },
            resetCurrent() {
                this.currRow = {
                    Id: -1,
                    roomId: "",
                    checkIn: "",
                    checkOut: "",
                    dayRate: "",
                    travelAgency: -1,
                    totalPrice: "",
                    commissionPercent: "",
                    commission: "",
                    income: "",
                    travelAgencyId: -1
                }
            },
            addNew() {
                this.resetCurrent();
                this.listView = 0;
            },
            async submit() {
                let response;
                try {
                    let validationResult = await this.$validator.validate('*');

                    if (validationResult) {

                        let {Id, roomId, checkIn, checkOut, dayRate, commission} = this.currRow;
                        let travelAgencyId = this.travelAgency.value;
                        checkIn = moment(this.currRow.checkIn, "DD/MM/YYYY").format("YYYY-MM-DD");
                        checkOut = moment(this.currRow.checkOut, "DD/MM/YYYY").format("YYYY-MM-DD");
                        this.currRow.travelAgencyId = travelAgencyId;
                        if (this.currRow.Id === -1) {
                            let ids = this.dataRows.map((r) => {
                                return r.Id;
                            });
                            this.currRow.Id = Math.max(...ids);

                            this.dataRows.push(this.currRow);
                        }
                        /*response = await this.$axios.post(this.$globalState.apiUrl + '/add-accommodation', {
                            roomId,
                            checkIn,
                            checkOut,
                            dayRate,
                            travelAgencyId,
                            commission
                        })

                    else
                        response = await this.$axios.post(this.$globalState.apiUrl + '/update-accommodation', {
                            Id,
                            roomId,
                            checkIn,
                            checkOut,
                            dayRate,
                            travelAgencyId,
                            commission
                        });*/

                        if (this.ServerErrors(response)) {
                            this.showErrors();
                        } else {
                            this.listView = 1;

                        }

                    } else
                        this.showErrors();


                } catch (e) {
                    this.showErrors(e.message);
                } finally {
                }
            },
            selectRow(row) {
                this.currRow = row;
                if (row.travelAgencyId!=undefined && row.travelAgencyId !== -1)
                    this.travelAgency = this.travelAgencies.find((e) => e.value === row.travelAgencyId);
                else
                    this.travelAgency = null;

                this.listView = 0;
            }
        } //methods
    }
</script>

<style scoped>
    .tablebody {
        background-color: white;
        opacity: 0.95;
        min-height: 500px;
    }

    .table .theader {
        cursor: default !important;
    }

    .table .row {
        border-left: 5px solid transparent;
    }

    .table .row:hover {
        border-left: 5px solid #2d8a96;
        -background-color: #2d8a96;
        cursor: pointer;
    }


    .ui-button--type-primary.ui-button--color-primary {
        background-color: #2d8a96;
    }

    .ui-button--type-primary.ui-button--color-primary:hover:not(.is-disabled), .ui-button--type-primary.ui-button--color-primary.has-dropdown-open {
        background-color: #234d59;
    }

    .color-gray {
        color: gray;
    }
</style>
