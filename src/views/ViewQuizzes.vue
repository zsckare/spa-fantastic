<template>
<a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['2']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span> Citas</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span> Encuestas</span>
        </a-menu-item>
       
      </a-menu>
    </a-layout-sider>
    <a-layout>
        <a-layout-header style="background: #000; padding: 0" >
        </a-layout-header  >
      <a-layout-content style="margin: 0 16px" ref="formContainer">
          <div>
          <!-- Content -->
            <h4>Encuestas</h4>

            <table class="table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr :key="quiz.id" v-for="quiz in quizzes">
                    <td>{{quiz.fecha}}</td>
                    <td>{{quiz.hora}}</td>
                    <td>
                        <a-button type="primary">
                          Ver 
                        </a-button>
                    </td>
                </tr>
              </tbody>
            </table>
            
          <!-- End Content -->
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import firebase from "../firebaseConfig";

    
const messaging = firebase.messaging();
const db = firebase.firestore();
export default {
    name:'Quizzes',
    data() {
      return {
        isLoading: false,
        fullPage: true,
        collapsed: false,
        quizzes:[]
      };
    },
    created(){
        Notification.requestPermission()
        // messaging.getToken().then((currentToken) => {
        // if (currentToken) {
        //     console.log(currentToken)
        //     this.sTopic(currentToken)

        // } else {
        //     // Show permission request.
        //     console.log('No Instance ID token available. Request permission to generate one.');
        //     // Show permission UI.
        // }
        // }).catch((err) => {
        // console.log('An error occurred while retrieving token. ', err);
        
        // });
        // messaging.onMessage((payload) => {
        // console.log('Message received. ', payload);
        // // ...
        // });
       
        this.getQuizzes()
    },
    methods:{
        sTopic(token){
            var tokensRef = db.collection("tokens").get()
            .then(function(querySnapcht){
                querySnapcht.forEach(function(doc){
                    console.log(doc.data().token)
                })
            })

            

             db.collection("tokens")
            .add({token:token})
            .then(() => {
                console.log("Document successfully written!");
                
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        },
        onCollapse(collapsed, type) {
          console.log(collapsed, type);
        },
        onBreakpoint(broken) {
          console.log(broken);
        },
        async getQuizzes(){
          let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: true,
                  
                });
          var qzz = []
              let ref = await db.collection("quiz")
            .onSnapshot(function(snapshot) {
                snapshot.docChanges().forEach(function(change) {
                    if (change.type === "added" ) {
                        
                         var d = change.doc.data()                
                         console.log(change.doc.id)
                          console.log(change.doc.data())
                          var q ={
                            id:change.doc.id,
                            fecha:d.fecha,
                            hora:d.hora,
                            content: d.quiz
                          }
                          qzz.push(q)
                    }
                    if (change.type === "modified") {
                        console.log("Modified city: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        console.log("Removed city: ", change.doc.data());
                    }
                });

            });

            this.quizzes = qzz
            this.isLoading = false
            setTimeout(() => {
                  loader.hide()
                },5000)    
        }
    }
}
</script>
<style >
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>