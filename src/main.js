import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
