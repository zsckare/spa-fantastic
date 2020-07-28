<template>
<a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['2']" mode="inline">
        <a-menu-item key="1" @click="goToCitas">
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
                <tr :key="quiz.id" v-for="(quiz,index) in quizzes">
                    <td>{{quiz.fecha}}</td>
                    <td>{{quiz.hora}}</td>
                    <td>
                        <a-button type="primary" @click="verQuiz(index)">
                          Ver 
                        </a-button>
                    </td>
                </tr>
              </tbody>
            </table>
            

            <vue-modaltor :visible="open" @hide="hideModal">
              <template slot="close-icon">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  width="20"
                  height="20"
                  xml:space="preserve"
                >
                  <path
                    class="st0"
                    fill="#41b883"
                    d="M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"
                  />
                </svg>
              </template>

              <div class="row">
                <div class="col">
                    <h4>Encuesta</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Edad</th>
                          <th>Sexo</th>
                          <th>Peso</th>
                          <th>Estado Civil</th>
                          <th>Numero</th>
                          <th>Direccion</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {{currentQuiz.nombre}}
                          </td>
                          <td>
                            {{currentQuiz.edad}}
                          </td>
                          <td>
                            {{currentQuiz.sexo}}
                          </td>
                          <td>
                            {{currentQuiz.peso}}
                          </td>
                          <td>
                            {{currentQuiz.estadoCivil}}
                          </td>
                          <td>
                            {{currentQuiz.numero}}
                          </td>
                          <td>
                            {{currentQuiz.direccion}}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="row">
                      <div class="col">
                        <h4>Servicio: {{currentQuiz.servicio}} </h4>
                        <h4>Alimentacion:</h4>
                        <p :key="alimentacion.name" v-for="alimentacion in currentQuiz.alimentos">
                            <span style="text-transform: uppercase">{{alimentacion.name}}</span> - {{alimentacion.value}}
                        </p>
                        <h4>Actividad Fisica</h4>
                        <p :key="actividadFisica.name" v-for="actividadFisica in currentQuiz.actividadFisica"  >
                          <span style="text-transform:uppercase">{{actividadFisica.name}} </span> - {{actividadFisica.value}}
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </vue-modaltor>
          <!-- End Content -->
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        
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
        quizzes:[],
        currentQuiz:{},
        open:false
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
                },3000)    
        },
        verQuiz(index){
          var qzz = this.quizzes
          console.log(qzz[index])
           this.currentQuiz = qzz[index].content
           console.log(this.currentQuiz)
           this.open = true
        },
        hideModal(){
          this.open = false
        },
        goToCitas(){
          this.$router.push('citas');
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