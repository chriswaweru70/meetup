import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/MeetUp/Edit/editMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/MeetUp/Edit/editMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/MeetUp/Edit/editMeetupTimeDialog.vue'
import EditMeetupRegisterDialog from './components/MeetUp/Registration/registerDialog.vue'


Vue.filter('date', DateFilter),
Vue.component('app-alert', AlertCmp),
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog),
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog),
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog),
Vue.component('app-meetup-register-dialog', EditMeetupRegisterDialog)

Vue.use(Vuetify, {
  theme: {
    primary: '#D32F2F',
    secondary: '#BDBDBD',
    accent: '#FF5252',
    warning: '#FFA000',
    error: '#D50000',
    success: '#81C784'
  }
})




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDmteIAKDLhXIM_YqVP6fcB3Qo8vnLZKmI',
      authDomain: 'dev-meetup-4879c.firebaseapp.com',
      databaseURL: 'https://dev-meetup-4879c.firebaseio.com',
      projectId: 'dev-meetup-4879c',
      storageBucket: 'gs://dev-meetup-4879c.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.$store.dispatch('autoSignIn', user)
         this.$store.dispatch('fetchUserData')
       }
    })
    this.$store.dispatch('loadMeetups')
  }
})