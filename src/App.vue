<template>
  <div id="app">

    <div id="nav" v-if="isAuthenticated">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Acerca</router-link>
    </div>
    <router-view/>



    <notifications group="citas" />

  </div>
</template>
<script>
import firebase from "./firebaseConfig";
const messaging = firebase.messaging();
export default {
  
  data:function(){
    return{
      isAuthenticated:false
    }
  },
  created() {
   
    

    messaging
    .requestPermission()
    .then(() => firebase.messaging().getToken())
    .then((token) => {
        console.log(token) // Receiver Token to use in the notification
    })
    .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
    });

    messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
    // ...
    });
}
}
</script>>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

