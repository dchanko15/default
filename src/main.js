import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store2 from 'store2'

import 'keen-ui/src/bootstrap';

import VeeValidate from 'vee-validate'
import kaLocale from './assets/js/ka.js'


import 'flexboxgrid2/flexboxgrid2.css'
import './assets/css/font_bpg_arial.css'
import './assets/css/geowebfonts.css'
import './assets/css/style.css'

let globalState = {
    apiUrl: process.env.VUE_APP_API_URL,
    baseUrl: process.env.BASE_URL,
    activityId: process.env.VUE_APP_ACTIVITYID,
    showDetails: process.env.VUE_APP_SHOWDETAILS,
    userRole: 0,

};


async function getUrl(url, data) {
    let link;
    if (globalState.apiUrl.indexOf("/testData") !== -1) {
        link = globalState.apiUrl + url + ".json";
    } else
        link = globalState.apiUrl + url;
    return axios.get(link, {params: data});
}

async function postUrl(url, data) {
    let link;
    if (globalState.apiUrl.indexOf("/testData") === -1)
        link = globalState.apiUrl + url;
    else
        link = globalState.apiUrl + url + "-response.json";
    return axios.get(link);

}


async function loadData() {
    try {
        let d = +(new Date());
        let response = await axios.get(globalState.baseUrl + "schedule.json?t=" + d);

        let t = Object.assign(globalState, response.data);
        t.subjects = [];
        t.programs = [];
        t.subjectsLoaded = 0;
        t.programsLoaded = 0;
        getUrl("/subjects").then((response) => {
            t.subjects = response.data.Subjects;
            t.subjectsLoaded = 1;
        });

        function yyy() {
            getUrl("/programs").then((response) => {
                t.programs = response.data.Programs;
                t.programsLoaded = 1;
            })
        }

        setTimeout(yyy, 10000);


        return t;

    } catch (e) {
        console.error(e.message);
    }
}


axios.defaults.withCredentials = true;

Vue.prototype.$store2 = store2.session.namespace('uee-res');
Vue.prototype.$getData = getUrl;
Vue.prototype.$postData = postUrl;


Vue.config.productionTip = false;


//Vue.use(KeenUI);


let dict = {

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
        'mobilePhone': {
            regex: () => 'მობილურის ნომერი უნდა შეიტანოთ ფირმატით: 5XXYYYYYY'
        },
        'password': {
            regex: () => 'პაროლი უნდა იყოს 5-12 სიმბოლო, აუცილებლად უნდა შეიცავდეს ერთ ციფრს მაინც. \n' +
                'დასაშვებია მხოლოდ ლათინური სიმბოლოები და ციფრები.'
        },
        'passwordConfirm': {
            regex: () => 'პაროლი ხელმეორედ არ ემთხვევეა პაროლს.'
        },
        citizenship : {
            regex: () => 'მოქალაქეობა - ქვეყნის სამ სიმბოლოიანი კოდი.'
        }
    }

};
VeeValidate.Validator.localize({[kaLocale.name]: kaLocale});
Vue.use(VeeValidate, {
    events: 'blur',
    locale: 'ka',
    dictionary: {
        ka: dict
    }

});

VeeValidate.Validator.localize({[kaLocale.name]: kaLocale});
Vue.use(VeeValidate, {
    events: 'blur|change',
    locale: 'ka',
    dictionary: {
        ka: dict
    }
});



router.beforeEach((to, from, next) => {
    let globalState = Vue.prototype.$globalState;

    if (to.meta.role && globalState.userRole !== to.meta.role) {
        next({
            path: '/restricted',
        })
    } else {
        next()
    }
});

/*router.afterEach((to, from) => {
    return;
})*/


(async function start() {
    let t = await loadData();
    Vue.prototype.$globalState = Vue.observable(t);
    /*    let user = Vue.prototype.$store2.get('user');
        if (user) {
            Vue.prototype.$globalState.user = user;
            Vue.prototype.$globalState.reload = 1;
        }*/


    new Vue({

        router,
        render: h => h(App)
    }).$mount('#app');

})();



