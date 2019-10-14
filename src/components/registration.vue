<template>
    <div>
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12  col-lg-11">
                <div class="section">
                    <div v-if="page===0">
                        <div class="row">
                            <h2 class="header">რეგისტრაცია</h2>
                            <div class="col-xs-12">
                                <h4> სანამ დაიწყებდეთ რეგისტრაციას</h4>
                                <ul>
                                    <li>სარეგისტრაციო ფორმის შევსებამდე უნდა გადაიხადოთ გამოცდაში მონაწილეობის
                                        საფასური<br>(
                                        <router-link to="/pay-info">გადახდის საშუალებები</router-link>
                                        );
                                    </li>
                                    <li>უნდა გქონდეთ ელექტრონული ფოსტა და საქართველოში რეგისტრირებული მობილური
                                        ტელეფონი;
                                    </li>
                                    <li>ერთი და იგივე ელ. ფოსტა შეიძლება გამოიყენოს მხოლოდ ერთმა აპლიკანტმა;
                                    </li>
                                    <li> ერთი და იგივე მობილური ტელეფონის ნომერი შეიძლება გამოიყენოს მხოლოდ ერთმა
                                        აპლიკანტმა;
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <h4>შეთანხმება აპლიკანტსა და სსიპ - შეფასებისა და გამოცდების ეროვნულ ცენტრს შორის </h4>
                                <div class="disclaimer">
                                    <p style="padding: 1em">
                                        შეფასებისა და გამოცდების ეროვნული ცენტრის მიერ ორგანიზებულ ზოგადი უნარების
                                        გამოცდაზე ელექტრონული
                                        ფორმით რეგისტრაციისას და შემდგომ პერიოდში კონფლიქტური სიტუაციის თავიდან
                                        ასაცილებლად სრულყოფილად უნდა
                                        გაეცნოთ რეგისტრაციის წესებს, შეფასებისა და გამოცდების ეროვნული ცენტრის
                                        ვებგვერდზე განთავსებულ
                                        გამოცდის ჩატარების წესებს/პირობებს/ვადებს და დაადასტუროთ მათი გაცნობა.

                                    </p>
                                    <p style="padding: 0 1em 1em 1em">
                                        არავის გადასცეთ სისტემაში შესვლისათვის საჭირო პირადი ინფორმაცია! სარეგისტრაციო
                                        მონაცემებში/შევსებულ
                                        განცხადებაში ნებისმიერ ცვლილებაზე პასუხისმგებლობა ეკისრება პირს, რომელიც
                                        დარეგისტრირებულია
                                        სისტემაში. ცვლილების შეტანა შესაძლებელია მხოლოდ რეგისტრაციის ვადის ამოწურვამდე.
                                        ცვლილების თაობაზე,
                                        გეცნობებათ ელექტრონული ფოსტის მეშვეობით.
                                    </p>
                                    <p style="padding: 0 1em 1em 1em">
                                        გამოცდაზე რეგისტრაციის გავლის უფლება აქვს მხოლოდ „უმაღლეს საგანმანათლებლო
                                        დაწესებულებაში ერთიანი
                                        ეროვნული გამოცდების/საერთო სამაგისტრო გამოცდების გავლის გარეშე სწავლის უფლების
                                        მქონე
                                        აბიტურიენტების/მაგისტრანტობის კანდიდატების/სტუდენტების მიერ დოკუმენტების
                                        წარდგენისა და განხილვის
                                        წესის დამტკიცების შესახებ“ საქართველოს განათლებისა და მეცნიერების მინისტრის 2011
                                        წლის 29 დეკემბრის
                                        №224/ნ ბრძანებით დამტკიცებული დანართის მე-2 მუხლის პირველი პუნქტის „დ“
                                        ქვეპუნქტით გათვალისწინებული
                                        კატეგორიის პირებს.
                                    </p>
                                    <p style="padding: 0 1em 1em 1em">
                                        თქვენი შედეგები გამოქვეყნდება შეფასებისა და გამოცდების ეროვნული ცენტრის
                                        ოფიციალურ ვებგვერდზე
                                        ტესტირების დასრულებიდან 10 სამუშაო დღის ვადაში, რომელიც ხელმისაწვდომი იქნება
                                        მხოლოდ თქვენთვის.
                                    </p>
                                    <p style="padding: 0 1em 1em 1em">
                                        გამოცდის პროცედურის დადგენილი წესის დარღვევის ფაქტის თაობაზე პირი უფლებამოსილია,
                                        მხოლოდ გამოცდის
                                        დღეს 20:00 საათამდე წარადგინოს საპრეტენზიო განაცხადი იმ საგამოცდო ცენტრის
                                        შენობაში, სადაც ჩააბარა
                                        გამოცდა.
                                    </p>
                                    <p style="padding: 0 1em 1em 1em">
                                        შეფასებისა და გამოცდების ეროვნული ცენტრის მოთხოვნის შემთხვევაში (მოთხოვნა
                                        შეიძლება განხორციელდეს
                                        სატელეფონო შეტყობინებით, შეფასებისა და გამოცდების ეროვნული ცენტრის ოფიციალური
                                        ვებგვერდის მეშვეობით,
                                        ელექტრონულ ფოსტაზე შეტყობინების მოსვლით ან სხვა სახის შეტყობინებით) ვალდებული
                                        ხართ, დადგენილ ვადებში
                                        წარმოადგინოთ შესაბამისი ინფორმაცია/დოკუმენტაცია.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <hr>
                            <div class="col-xs-12">
                                <div>
                                    <ui-checkbox v-model="disclaimer">გავეცანი და ვეთანხმები შეთანხმების პირობებს
                                    </ui-checkbox>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 " style="text-align: right">
                                <ui-button color="primary"
                                           button-type="button"
                                           icon-position="right"
                                           :disabled="!signed"
                                           @click="nextPage">
                                    <!--                                    <div slot="icon"><i class="fas fa-2x fa-angle-right"></i></div>-->
                                    გაგრძელება
                                </ui-button>
                            </div>
                        </div>
                    </div>
                    <div v-if="page===1">

                        <form @submit.prevent="regSubmit">
                            <div class="row">
                                <div class="col-xs-12">
                                    <h2 class="header">რეგისტრაცია</h2>
                                </div>
                            </div>
                            <ui-tabs type="text">
                                <ui-tab title="პირადი ინფორმაცია" id="tab1">
                                    <ui-alert type="warning" :dismissible="false">
                                        შეავსეთ ყველა ველი და დააჭირეთ ღილაკს "შენახვა და გაგრძელება"
                                    </ui-alert>

                                    <div class="row">
                                        <div class="col-xs">
                                            <h5>პირადი მონაცემები</h5>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-xs col-md">
                                            <ui-textbox
                                                    help="გვარი"
                                                    data-vv-as="გვარი"
                                                    v-validate="{required: true, min:2, regex: /^([\-ა-ჰ]+)$/} "
                                                    :invalid="errors.has('lastName')"
                                                    :error="errors.first('lastName')"
                                                    v-model="lastName"
                                                    autocomplete="off"
                                                    name="lastName">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox
                                                    help="სახელი"
                                                    data-vv-as="სახელი"
                                                    v-validate="{required: true, min:2, regex: /^([\-ა-ჰ]+)$/}"
                                                    :invalid="errors.has('firstName')"
                                                    :error="errors.first('firstName')"
                                                    v-model="firstName"
                                                    autocomplete="off"
                                                    name="firstName">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 col-md">
                                            <ui-radio-group
                                                    help="სქესი"
                                                    data-vv-as="სქესი"
                                                    :options="[{value:1, label: 'კაცი'}, {value:2, label:'ქალი'}]"
                                                    :invalid="errors.has('gender')"
                                                    :error="errors.first('gender')"
                                                    v-validate="{required:true}"
                                                    name="gender"
                                                    v-model="gender">
                                            </ui-radio-group>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox
                                                    help="პირადი ნომერი"
                                                    data-vv-as="პირადი ნომერი"
                                                    :invalid="errors.has('IDNum')"
                                                    :error="errors.first('IDNum')"
                                                    v-validate="{required: true,regex:/^[0-9]{11}$/ }"
                                                    name="IDNum"
                                                    autocomplete="off"
                                                    v-model="IDNum">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox
                                                    help="დაბადების თარიღი"
                                                    data-vv-as="დაბადების თარიღი"
                                                    :invalid="errors.has('birthDate')"
                                                    :error="errors.first('birthDate')"
                                                    v-validate="'required|date_format:dd/MM/yyyy'"
                                                    name="birthDate"
                                                    autocomplete="off"
                                                    v-model="birthDate">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox
                                                    help="მოქალაქეობა"

                                                    data-vv-as="მოქალაქეობა"
                                                    :invalid="errors.has('citizenship')"
                                                    :error="errors.first('citizenship')"
                                                    v-validate="{required: true,regex:/^[A-Z]{3}$/ }"
                                                    name="citizenship"
                                                    autocomplete="off"
                                                    v-model="citizenship">
                                            </ui-textbox>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-xs">
                                            <h5>საკონტაქტო ინფორმაცია</h5>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox
                                                    help="ელ. ფოსტა"
                                                    data-vv-as="ელ. ფოსტა"
                                                    :invalid="errors.has('email')"
                                                    :error="errors.first('email')"
                                                    v-validate="'required|email'"
                                                    name="email"
                                                    autocomplete="off"
                                                    v-model="email">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox
                                                    help="მობილურის ნომერი"
                                                    data-vv-as="მობილურის ნომერი"
                                                    :invalid="errors.has('mobilePhone')"
                                                    :error="errors.first('mobilePhone')"
                                                    v-validate="{required:true , regex:/^5[0-9]{8}$/}"
                                                    name="mobilePhone"

                                                    autocomplete="off"
                                                    v-model="mobilePhone">
                                            </ui-textbox>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-xs">
                                            <h5>სისტემაში შესვლა</h5>
                                        </div>
                                    </div>

                                    <div class="row ">

                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox type="password"
                                                        help="პაროლი (5-12 ლათინური სიმბოლო და ერთი ციფრი მაინც)"
                                                        data-vv-as="პაროლი"
                                                        v-model="password"
                                                        name="password"
                                                        ref="password"
                                                        v-validate="{required:true,regex: /^(?=.*\d)(?=.*[A-z]).{5,12}$/}"
                                                        :invalid="errors.has('password')"
                                                        :error="errors.first('password')">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 col-md ">
                                            <ui-textbox type="password"
                                                        help="პაროლი ხელმეორედ"
                                                        data-vv-as="პაროლი ხელმეორედ"
                                                        v-model="passwordConfirm"

                                                        name="passwordConfirm"
                                                        v-validate="'required|confirmed:password'"
                                                        :invalid="errors.has('passwordConfirm')"
                                                        :error="errors.first('passwordConfirm')">
                                            </ui-textbox>
                                        </div>
                                    </div>


                                    <div class="row middle-xs ">
                                        <div class="col-xs end-xs">
                                            <ui-button color="primary" icon-position="right"
                                                       icon="arrow_forward_ios">

                                                შენახვა და გაგრძელება
                                            </ui-button>
                                        </div>
                                    </div>


                                </ui-tab>
                                <ui-tab title="საგნები">
                                    <div slot="header">
                                        <div class="row narrow">
                                            <div class="hidden-xs hidden-sm">
                                                <h4>საგნები</h4>
                                            </div>
                                            <div class="hidden-md hidden-lg hidden-xl  ">
                                                <h5>საგნები</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="tbl-subjects">
                                        <tr v-for="subject in EntrantSubjects" :key="subject.SubjectId">
                                            <td style="text-align: right">
                                                <ui-icon-button
                                                        color="red"
                                                        type="secondary"
                                                        button-type="button"
                                                        icon="delete_outline" tooltip="წაშლა"
                                                        tooltip-position="left"
                                                        @click="delSubject(subject.SubjectId)">
                                                </ui-icon-button>
                                            </td>
                                            <td>
                                                {{subject.SubjectName}}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: right">

                                            </td>
                                            <td style="width: 250px">

                                                <ui-select
                                                        ref="new_subject"
                                                        :options="subjects"
                                                        :keys="{
                                                    label:'SubjectName',
                                                    value:'SubjectId'
                                                    }"
                                                        @change="addNewSubjet"
                                                        placeholder="აირჩიეთ დასამატებელი საგანი"
                                                        v-model="newSubject">

                                                </ui-select>
                                            </td>
                                            <!--<td>-->
                                            <!--<ui-icon-button type="secondary" button-type="button" icon="undo"-->
                                            <!--@click="clearSelection"></ui-icon-button>-->

                                            <!--</td>-->
                                        </tr>
                                    </table>
                                    <!--  <div>
                                          <ui-button button-type="button" icon="add_circle_outline">დამატება</ui-button>
                                      </div>-->
                                </ui-tab>
                                <ui-tab title="პროგრამები">
                                    <div slot="header">
                                        <div class="row narrow">
                                            <div class="hidden-xs hidden-sm">
                                                <h4>პროგრამები</h4>
                                            </div>
                                            <div class="hidden-md hidden-lg hidden-xl  ">
                                                <h5>პროგ...</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="!$globalState.programsLoaded" class="row middle-xs center-xs">
                                        <div>
                                            დაელოდეთ მონაცემები იტვირთება &nbsp;
                                        </div>
                                        <div>
                                            <ui-progress-circular color="primary"></ui-progress-circular>
                                        </div>

                                    </div>
                                    <div style="overflow-x: hidden; overflow-y: visible; max-height: 50vh; position: relative"
                                         v-else="">

                                        <div>
                                            <div class="row start-xs progRow"
                                                 v-for="(program, priority) in entrantPrograms"
                                                 :class="{activeProgRow: currProg===program.ProgCode}"
                                                 :ref="'p'+program.ProgCode"
                                                 @click="setCurrProg(program.ProgCode)" :key="program.ProgCode"
                                                 style="border-bottom: 1px solid silver; position: relative; padding: 3px 0">


                                                <div class="col-xs-1 end-xs">
                                                    <strong>{{priority+1}}</strong>
                                                </div>
                                                <div class="col-xs-1 col-sm-2 col-md-2 center-xs">
                                                    <strong>{{program.ProgCode}}</strong>
                                                </div>
                                                <div class="col-sm" style="position: relative">
                                                    <div v-show="currProg===program.ProgCode"
                                                         style="display: inline-flex;
                                                 position: absolute;  bottom:0.1em; right: 1.1em; z-index:30; ">
                                                        <ui-icon-button button-type="button" type="primary"
                                                                        style="margin: 3px;"
                                                                        @click="moveUp(priority)"
                                                                        icon="keyboard_arrow_up"
                                                                        :disabled="priority===0"
                                                                        tooltip="ზევით"></ui-icon-button>
                                                        <ui-icon-button button-type="button" type="primary"
                                                                        icon="keyboard_arrow_down" style="margin: 3px;"
                                                                        @click="moveDown(priority)"
                                                                        :disabled="priority===entrantProgramCount-1"
                                                                        tooltip="ქვევით"></ui-icon-button>

                                                        <ui-icon-button button-type="button" type="primary" icon="add"
                                                                        tooltip="დამატება" style="margin: 3px;"
                                                                        @click="addNewProgram(priority)">
                                                        </ui-icon-button>

                                                        <ui-icon-button type="primary" icon="delete_outline"
                                                                        tooltip="წაშლა"
                                                                        style="margin: 3px;"
                                                                        color="red"></ui-icon-button>
                                                    </div>
                                                    <strong>{{program.UniName}}</strong> <br>
                                                    {{program.ProgName}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </ui-tab>
                                <ui-tab title="უსაფრთხოება" :disabled="true">
                                    <div slot="header">
                                        <div class="row narrow">
                                            <div class="hidden-xs hidden-sm">
                                                <h4>უსაფრთხოება</h4>
                                            </div>
                                            <div class="hidden-md hidden-lg hidden-xl  ">
                                                <h5>უსაფ...</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 ">
                                    <span style="font-size:0.9em; color: rgba(0,0,0,.54); ">სისტემაში შესასვლელად გამოიყენეთ თქვენი ელ. ფოსტა
                                        <!--<strong>{{email ? ': '+email: ''}}</strong>-->
                                    </span>

                                            <hr>
                                        </div>

                                        <div class="col-xs-12 col-md-6">
                                            <ui-textbox type="password"
                                                        help="პაროლი (5-12 ლათინური სიმბოლო და ერთი ციფრი მაინც)"
                                                        v-model="password"
                                                        name="password"
                                                        ref="password"
                                                        v-validate="{required:true,regex: /^(?=.*\d)(?=.*[A-z]).{5,12}$/}"
                                                        :invalid="errors.has('password')"
                                                        :error="errors.first('password')">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <ui-textbox type="password"
                                                        v-model="passwordConfirm"
                                                        help="პაროლი ხელმეორედ"
                                                        name="passwordConfirm"
                                                        v-validate="'required|confirmed:password'"
                                                        :invalid="errors.has('passwordConfirm')"
                                                        :error="errors.first('passwordConfirm')">
                                            </ui-textbox>
                                        </div>
                                        <div class="col-xs-12 ol-sm-12 col-md-8 ">

                                            <ui-checkbox v-model="auth2FA" true-value="1" false-value="0">
                                    <span style="font-size:0.9em; color: rgba(0,0,0,.54); ">
                                    დამატებითი უსაფრთხოება <br> (სისტემაში შესასვლელეად, ასევე ინფორმაციის დამახსოვრების დროს დამატებით უნდა შეიტანოთ მობილურ ნომერზე გამოგზავნილი sms კოდი.)
                                    </span>
                                            </ui-checkbox>
                                            <span style="font-size:0.9em; color: rgba(0,0,0,.54); ">
                                </span>
                                        </div>
                                    </div>
                                    <hr>

                                </ui-tab>
                            </ui-tabs>
                            <!--<div class="row">
                                <div class="col-xs-6 " style="text-align: left">
                                    <ui-button color="primary" @click="prevPage" button-type="button"
                                               icon="arrow_back_ios">

                                        დაბრუნება
                                    </ui-button>
                                </div>
                                <div class="col-xs-6 " style="text-align: right">
                                    <ui-button color="primary" icon-position="right" icon="save">

                                        რეგისტრაცია
                                    </ui-button>
                                </div>
                            </div>-->
                        </form>
                    </div>
                    <div v-if="page===2">

                    </div>
                </div>
            </div>
        </div>
        <modal-message ref="errors-modal" :error-messages="errorMessage"
                       info="გადაამოწმეთ შეტანილი ინფორმაცია"></modal-message>

        <ui-modal ref="allProgramsModal" size="large" title="პროგრამის დამატება" dismiss-on="close-button esc"
                  @open="allProgamsOpened">
            <ui-modal ref="errorProgramSubjects" title="პროგრმის დამატება შეუძლებელია">
                <ui-alert type="error" :dismissible="false">
                    <div v-html="errorMessage_AddProgram"></div>
                </ui-alert>
            </ui-modal>

            <div class="row middle-xs" style="background-color: #f5f5f5; padding: 1em 0 0 0; margin-bottom: 5px">
                <div class="col-xs-3 col-sm-2 col-md-2">
                    <ui-textbox ref="filterCode" label="კოდი" v-model="filterCode"></ui-textbox>
                </div>
                <div class="col-sm col-xs">
                    <ui-textbox label="პროგრამა" v-model="filterProgram"></ui-textbox>
                </div>
                <div class="col-xs-2 col-sm-1 col-md-1 ">
                    <div v-if="filterCode || filterProgram ">
                        <ui-icon-button button-type="button" icon="remove" tooltip="ფილტრის მოხსნა"
                                        @click="removeFilter"></ui-icon-button>
                    </div>
                </div>

            </div>

            <div style="overflow-y: auto; overflow-x: hidden; height: 70vh; ">
                <div v-if="!$globalState.programsLoaded">
                    <ui-progress-circular color="primary"></ui-progress-circular>
                </div>
                <div v-else>
                    <div class="row allProgRow" v-for="p in allPrograms"
                         :key="'all'+p.ProgCode"
                         @click="selectProgram(p)"
                         style=" border-bottom: 1px solid silver; border-collapse: collapse; position: relative; padding: 3px">

                        <div class="col-xs-12 col-sm-2 col-md-2 start-xs">
                            <strong>{{p.ProgCode}}</strong>
                        </div>
                        <div class="col-xs">
                            <strong>{{p.UniName}}</strong><br>
                            {{p.ProgName}}
                            <div class="row" style="margin: 1em 0 0.5em -0.6em; font-weight: 500">
                                <div class="col-xs-6">
                                    ადგილების რაოდენობა: {{p.Vacancies}}
                                </div>
                                <div class="col-xs-6">
                                    საფასური: {{p.AnnualPayment}},&nbsp;
                                    <span v-if="p.GrantFinancing===2">ფინანსდება</span>
                                    <span style="color:red" v-else-if="p.GrantFinancing===0">არ ფინანსდება</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ui-modal>
    </div>
</template>

<script>
    import ServerValidationMixin from './mixinErrors'

    import modalMessage from './modalMessage'

    import UiCheckbox from "keen-ui/src/UiCheckbox";
    import UiIconButton from "keen-ui/src/UiIconButton";
    import UiPopover from "keen-ui/src/UiPopover";
    import UiButton from "keen-ui/src/UiButton";
    import UiTextbox from "keen-ui/src/UiTextbox";
    import UiModal from "keen-ui/src/UiModal";
    import UiRadioGroup from "keen-ui/src/UiRadioGroup";
    import UiTabs from "keen-ui/src/UiTabs";
    import UiTab from "keen-ui/src/UiTab";
    import UiIcon from "keen-ui/src/UiIcon";
    import UiAlert from "keen-ui/src/UiAlert";
    import UiSelect from "keen-ui/src/UiSelect";
    import UiProgressCircular from "keen-ui/src/UiProgressCircular";


    export default {
        name: 'registration',
        mixins: [ServerValidationMixin],
        components: {
            UiModal,
            UiTextbox,
            UiButton,
            UiPopover,
            UiIconButton,
            UiCheckbox,
            UiRadioGroup,
            UiTabs,
            UiTab,
            UiIcon,
            UiAlert,
            UiSelect,
            UiProgressCircular,

            'modal-message': modalMessage,

        },
        data: function () {
            return {
                activityId: 1,
                payment: -1,
                lastName: '',
                firstName: '',
                IDNum: '',
                mobilePhone: '',
                birthDate: '',
                citizenship: '',
                gender: '',
                password: '',
                email: '',
                passwordConfirm: '',
                examCity: "",
                disclaimer: 0,
                page: 0,
                candidateId: -1,
                auth2FA: '0',
                specialConditions: '0',
                auth2faCode: '',
                cities: [],
                entrantSubjects: [],
                currSubjects: [],

                newSubject: "",
                currProg: {},
                currPriority: -1,
                errorMessage_AddProgram: "",
                filterCode: "",
                filterUni: "",
                filterProgram: "",
                filterPayment: 0,
                ep: [],


            }
        },
        computed: {
            signed: function () {
                return this.disclaimer
            },
            examCities: function () {
                return this.cities;
            },
            subjects: function () {
                let _this = this;
                let _subjects = this.$globalState.subjects.filter((s) => {
                    return !(_this.entrantSubjects.find((es) => {
                        return es.SubjectGroupId === s.SubjectGroupId
                    }))
                });

                //  _subjects
                return _subjects;
            },

            EntrantSubjects: function () {
                return this.entrantSubjects;
            },
            entrantProgramCount: function () {
                return this.entrantPrograms.length;
            },
            entrantPrograms: function () {
                let programs = this.$globalState.programs || [];
                return this.ep.map(prog => {
                    return programs.find(v => prog.ProgCode === v.ProgCode)
                });

            },
            allPrograms: function () {
                let _this = this;
                let programs = this.$globalState.programs || [];
                return programs.filter(p => {
                        let match;
                        match = (!_this.filterCode || p.ProgCode.startsWith(_this.filterCode));
                        if (match)
                            match = (!_this.filterProgram || p.ProgName.indexOf(_this.filterProgram) > -1);
                        if (match)
                            match = (!_this.filterPayment || p.AnnualPayment < _this.filterPayment);
                        if (match)
                            match = (!_this.filterUni || p.UniName.indexOf(_this.filterUniName) > -1);
                        return match;
                    }
                );
            }

        },
        created() {
            /*     if (!Element.prototype.scrollIntoViewIfNeeded) {
                     Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
                         centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;
                         let parent = this.parentNode,
                             overTop = this.offsetTop < parent.scrollTop,
                             overBottom = (this.offsetTop + this.clientHeight) > (parent.scrollTop + parent.clientHeight),
                             alignWithTop = true;

                         if (overBottom)
                             alignWithTop = false;

                         if ((overTop || overBottom) && centerIfNeeded) {
                             parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 + this.clientHeight / 2;
                         }
                         if ((overTop || overBottom) && !centerIfNeeded) {
                             this.scrollIntoView(alignWithTop);
                         }
                     };
                 }*/
        },
        async mounted() {
            //this.$validator.localize('ka');
            // this.hasPayment();

            let response = await this.$getData("/entrant-subjects");

            let entrantSubjects = response.data.EntrantSubjects;

            let subjects = this.$globalState.subjects;
            let es = entrantSubjects.map(_es => {
                let s = subjects.find(_s => _s.SubjectId === _es.SubjectId);
                return s;
            });
            this.entrantSubjects = es;
            response = await this.$getData('/exam-cities');
            this.cities = response.data.ExamCities;

            response = await this.$getData("/entrant-programs");

            this.ep = response.data.EntrantPrograms;


        },

        methods: {
            async regSubmit() {
                try {
                    let validationResult = await this.$validator.validateAll();
                    if (validationResult) {
                        let {candidateId, email, password, auth2FA, IDNum, lastName, firstName, mobilePhone, specialConditions, passwordConfirm, activityId} = this.$data;
                        let postRes = await this.$axios.post(this.$globalState.apiUrl + '/register', {
                            email,
                            password,
                            auth2FA,
                            IDNum,
                            lastName,
                            firstName,
                            mobilePhone,
                            specialConditions,
                            passwordConfirm,
                            activityId,
                            candidateId
                        });

                        let results = postRes.data;

                        if (this.ServerErrors(postRes)) {
                            this.showErrors()
                        } else {
                            this.candidateId = +results.candidateId;

                            if (+this.auth2FA === 0) {
                                this.registrationSuccess()
                            } else {
                                this.page = 2
                            }
                        }
                    } else {
                        this.showErrors('')
                    }
                } catch (err) {
                    this.showErrors(err.message)
                }
            },

            registrationSuccess() {
                this.$globalState.user.candidateId = this.candidateId;
                this.$globalState.user.role = Roles.user1;

                this.$router.push('/home')
            },
            nextPage() {
                this.page++
            },
            prevPage() {
                this.page--
            },
            hasPayment() {
                let _this = this;
                const checkPayment = value =>
                    new Promise(resolve => {
                        _this.$axios.get(_this.$globalState.paymentsUrl + '/balance', {
                            params: {
                                typeId: 104,
                                idNum: value
                            }
                        }).then((response) => {
                            let rows = response.data;
                            if (rows && rows.length === 1 && rows[0].Amount >= 100) {
                                return resolve({valid: true})
                            } else {
                                return resolve({
                                    valid: false,
                                    data: {
                                        message: 'თქვენ არ გაქვთ გადახდილი ტესტირებაში მონაწილეობის საფასური',
                                    }
                                })
                            }

                        })

                    });

                this.$validator.extend('hasPayment', {
                    validate: checkPayment,
                    getMessage: (field, params, data) => data.message
                });

                this.$validator.extend('citySelected', {
                    validate: (v) => {
                        console.log(v);
                        return !!v.value
                    },

                    getMessage: (field, params, data) => "აირჩიეთ ქალაქი"

                });
            },

            addNewSubjet() {
                if (this.newSubject) {
                    let ns = Object.assign({}, this.entrantSubjects[0], this.newSubject);

                    this.entrantSubjects.push(ns);
                    this.entrantSubjects.sort((a, b) => a.SubjectGroupId - b.SubjectGroupId);
                    this.newSubject = "";
                }
            },
            delSubject(SubjectId) {
                let ind = this.entrantSubjects.findIndex(es => es.SubjectId === SubjectId);
                this.entrantSubjects.splice(ind, 1);
            },

            setCurrProg(progCode) {
                this.currProg = progCode;
            },
            moveUp(priority) {
                if (priority - 1 >= 0) {

                    let currPriority = this.ep[priority];
                    this.ep[priority] = this.ep[priority - 1];
                    this.ep[priority - 1] = currPriority;
                    this.ep.push(null);
                    this.ep.pop();
                    this.$nextTick(() => {
                        let el = this.$refs['p' + this.currProg][0];
                        el.scrollIntoViewIfNeeded(false)
                    });
                }
            },
            moveDown(priority) {
                if (priority < this.ep.length - 1) {

                    let currPriority = this.ep[priority];
                    this.ep[priority] = this.ep[priority + 1];
                    this.ep[priority + 1] = currPriority;
                    this.ep.push(null);
                    this.ep.pop();


                    this.$nextTick(() => {
                        let el = this.$refs['p' + this.currProg][0];
                        el.scrollIntoViewIfNeeded(false)
                        // el.scrollIntoViewIfNeeded({block: "end", inline: "nearest", behavior:"smooth"})
                    });
                }
            },
            addNewProgram(priority) {
                this.currPriority = priority;
                this.$refs.allProgramsModal.open();
            },
            removeFilter() {
                this.filterCode = "";
                this.filterProgram = "";
                this.$refs.filterCode.focus();
            },
            allProgamsOpened() {
                this.$refs.filterCode.focus();
            },
            selectProgram(program) {

                let progExists = this.entrantPrograms.filter(p => p.ProgCode === program.ProgCode);
                if (progExists.length > 0) {
                    this.errorMessage_AddProgram = "თქვენ უკვე არჩეული გაქვთ <strong>" + program.ProgCode + "</strong> პროგრამა.";
                    this.$refs.errorProgramSubjects.open();
                    return;
                }

                let pattern = new RegExp(program.RegExPattern);

                let subjects = (this.entrantSubjects.map(s => s.SubjectGroupId)).toString();
                let approved = pattern.test(subjects);
                if (approved) {
                    if (this.entrantPrograms.length > this.currPriority + 1)
                        this.entrantPrograms.splice(this.currPriority + 1, 0, program);
                    else
                        this.entrantPrograms.push(program);
                    this.$refs.allProgramsModal.close();
                    this.currProg = program.ProgCode;

                } else {
                    this.errorMessage_AddProgram = "თქვენ არ გაქვთ არჩეული <strong>" + program.ProgCode + "</strong> პროგრამის შესაამისი საგამოცდო საგნები.";
                    this.$refs.errorProgramSubjects.open();
                }

            }

        }

    }
</script>
<style scoped>
    .header {
        margin-top: 0.5vh;
    }

    .disclaimer {
        height: 30vh;
        overflow-y: scroll;
        margin-bottom: 1em;
        border-top: 1px solid silver;
        border-bottom: 1px solid silver;
    }

    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .narrow {
        margin: -1em 0em;
    }

    .tbl-subjects {
        border-collapse: collapse;
        -width: 80vw;
        margin: 1em 0;


    }

    @media screen and (min-width: 500px) {
        .tbl-subjects {

            -width: 50vw;
        }
    }

    @media screen and (min-width: 900px) {
        .tbl-subjects {

            -width: 30vw;


        }
    }

    .tbl-subjects td {

        padding: 0.4em;
        -border: 1px solid silver
    }

    /*.tbl-subjects tr:hover {

        padding: 1em;
        background-color: rgb(53, 148, 224);
        color: white;

    }*/

    .tbl-subjects .remove-btn {
        color: maroon;
        cursor: pointer;
    }

    .popover-style {
        padding: 0.25em 0.5em;
        color: #444;
        font-weight: 300;
    }

    .activeProgRow {
        background-color: rgb(73, 174, 249);
        color: white;
    }

    .progRow {
        cursor: pointer;
    }

    .allProgRow {
        cursor: pointer;
    }

    .allProgRow:hover {
        background-color: rgb(73, 174, 249);
        color: white;
    }


</style>
