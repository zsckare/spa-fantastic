<template>
<a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span> Citas</span>
        </a-menu-item>
        <a-menu-item key="2" @click="goToEncuestas">
          <a-icon type="desktop" />
          <span> Encuestas</span>
        </a-menu-item>
       
      </a-menu>
    </a-layout-sider>
    <a-layout>
        <a-layout-header style="background: #000; padding: 0" >
        </a-layout-header  >
      <a-layout-content style="margin: 0 16px">
       
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <!-- Content -->
          <h4>Citas agendadas</h4>
          <table class="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="cita.id" v-for="cita in citas">
                <td>{{cita.nombre}}</td>
                <td>{{cita.telefono}}</td>
                <td>{{cita.servicio}}</td>
                <td>{{cita.dia}}</td>
                <td>{{cita.hora}}</td>
              </tr>
            </tbody>
          </table>
            
          <!-- End Content -->
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Spa Fantastic ©2020
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import firebase from "../firebaseConfig";
const db = firebase.firestore();


export default {
    name:'Apointments',
    data() {
        return {
            collapsed: false,            
            citas:[]
        };
    },
    created(){
      this.getCitas()
    },
    methods:{
        async getCitas(){
          var citasDB = []
            // .collection("citas").get()
            // .then(function(querySnapshot) {
              
            //     querySnapshot.forEach(function(doc) {   
                 
            //     });
                
                
            // })
            // .catch(function(error) {
            //     console.log("Error getting documents: ", error);
            // });



            let ref = await db.collection("citas")
            .onSnapshot(function(snapshot) {
                snapshot.docChanges().forEach(function(change) {
                    if (change.type === "added" ) {
                        
                         var d = change.doc.data()                
                         console.log(change.doc.id)
                        
                          var c = {
                             id:change.doc.id,
                            nombre:d.nombre,
                            telefono:d.telefono,
                            servicio:d.servicio,
                            dia:d.dia,
                            hora:d.hora
                          }
                          citasDB.push(c)
                    }
                    if (change.type === "modified") {
                        console.log("Modified city: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        console.log("Removed city: ", change.doc.data());
                    }
                });
            });

            console.log(citasDB)
            this.citas = citasDB
        },
        goToEncuestas(){
          this.$router.push('encuestas');
        }
    }

}
</script>