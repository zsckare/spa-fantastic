import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fullCalendar from 'vue-fullcalendar'
import VModal from 'vue-js-modal'
import Notifications from 'vue-notification'
import TimePicker from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import VueModalTor from "vue-modaltor";
import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    // Init plugin
    Vue.use(Loading);

Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false
Vue.use(VueModalTor);
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
