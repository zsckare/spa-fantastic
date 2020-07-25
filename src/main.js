import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fullCalendar from 'vue-fullcalendar'

Vue.component('full-calendar', fullCalendar)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  computed: { 
    /* isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }, */
  },
}).$mount('#app')
