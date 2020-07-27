import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fullCalendar from 'vue-fullcalendar'
import VModal from 'vue-js-modal'
import Notifications from 'vue-notification'
import TimePicker from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(Notifications)
Vue.use(TimePicker)

new Vue({
  router,
  render: h => h(App),
  
  computed: { 
    /* isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }, */
  },
}).$mount('#app')
