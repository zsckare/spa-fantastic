<template>
    <div class="citas">
      

    <header id="home" class="header-area pt-100">

        <div class="shape header-shape-one">
            <img src="images/banner/shape/shape-1.png" alt="shape">
        </div> <!-- header shape one -->

        <div class="shape header-shape-tow animation-one">
            <img src="images/banner/shape/shape-2.png" alt="shape">
        </div> <!-- header shape tow -->

        <div class="shape header-shape-three animation-one">
            <img src="images/banner/shape/shape-3.png" alt="shape">
        </div> <!-- header shape three -->

        <div class="shape header-shape-fore">
            <img src="images/banner/shape/shape-4.png" alt="shape">
        </div> <!-- header shape three -->

        <div class="navigation-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="#">
                                <img src="images/logo.png" alt="Logo">
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="page-scroll" href="">Encuesta</a>
                                    </li>
                                </ul> <!-- navbar nav -->
                            </div>
                            <div class="navbar-btn ml-20 d-none d-sm-block">
                                <a class="main-btn" href="#"><i class="lni-phone"></i> 6181234567 </a>
                            </div>
                        </nav> <!-- navbar -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- navigation bar -->

    </header>


      <div class="row d-flex justify-content-center" style="margin-top:4em">
        <div class="col" >
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Agendar Cita</h4>
              <full-calendar :events="fcEvents" @dayClick="dayClick" locale="es"></full-calendar>
            </div>
          </div>
        </div>
      </div>

      
      <!-- modal nueva cita -->
     

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
  <div class="row" style="padding:1.2em">
          <div class="col">
            <h4>Agendar cita para {{diaCita}}</h4>
            <div class="row">
              <div class="col">
                <div>
                  <a-steps :current="current">
                    <a-step v-for="item in steps" :key="item.title" :title="item.title" />
                  </a-steps>
                  <div class="steps-content">

                    <div class="row" v-if="current==0">
                      <div class="col">
                          <a-input ref="userNameInput" v-model="userName" placeholder="Nombre">
                            <a-icon slot="prefix" type="user" />
                            <a-tooltip slot="suffix" title="Extra information">
                              <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                            </a-tooltip>
                          </a-input>
                          <br />
                          <br />
                          <a-input ref="userNameInput" v-model="userPhone" placeholder="telefono">
                            <a-icon slot="prefix" type="user" />
                            <a-tooltip slot="suffix" title="Extra information">                              
                              <a-icon type="phone" style="color: rgba(0,0,0,.45)" />
                            </a-tooltip>
                          </a-input>
                          <br />
                          <br />
                      </div>
                    </div>

                    <div class="row" v-if="current ==1">
                      <div class="col">
                        <h4>Seleccionar la hora para la cita:</h4>
                        <a-time-picker placeholder="Click para Seleccionar"  format="h" @change="onChange" :locale="locale" :disabledHours="disabledHoursF"  />
                      </div>
                    </div>

                    <div class="row" v-if="current ==2">
                      <div class="col">
                        <h4>Seleccionar el servicio para la cita:</h4>
                          <div class="row " v-if="block === 1">
                          <div class="col">
                              <div class="row">
                                  <div class="col">
                                      <h4 class="center-text">Tipo de servicio</h4>   
                                  </div>
                              </div>
                              <div class="row"  v-bind:key="service.name" v-for="(service,index) in servicios">
                                  <div class="col">
                                      <button class="btn btn-rosa" style="min-width:300px; margin-top:10px" @click="selectService(index)"> {{service.name}} </button>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <!-- end select main service -->

                      <!-- start select subservice -->
                      <div class="row " v-if="block === 2 ">
                          <div class="col">
                              <div class="row">
                                  <div class="col">
                                      <h4 class="center-text"> {{servicios[selectedServiceIndex].name}} </h4>   
                                  </div>
                              </div>
                              <div class="row" :key="service" v-for="(service) in servicios[selectedServiceIndex].items ">
                                  <div class="col">
                                      <button class="btn btn-rosa" style="min-width:300px; margin-top:10px" @click="selectSubServiceF(service)"> {{service}} </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row" v-if="block ===3">
                        <div class="col">
                          {{selectService.name}} - {{selectedSubService}}
                        </div>
                      </div>
                      </div>
                    </div>


                  </div>
                  <div class="steps-action">
                    <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                      Siguiente
                    </a-button>
                    <a-button
                      v-if="current == steps.length - 1"
                      type="primary"
                      @click="saveCita"
                    >
                      Hecho
                    </a-button>
                    <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
                      Anterior
                    </a-button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
</vue-modaltor>

    </div>
</template>
<script>
import firebase from "../firebaseConfig";
import esES from 'ant-design-vue/lib/locale-provider/es_ES';
const db = firebase.firestore();
export default {
  name: 'NewAppointment',
  
  data () {
    return {
      open: false,
      selectedService:[],
      selectedSubService:'',
      block:1,
      userName:'',
      userPhone:'',
      locale: esES,
      fcEvents : [],
      diaCita:'',
      current: 0,
      hora:'',
      steps: [
        {
          title: 'Datos',
          content: 'First-content',
        },
        {
          title: 'Hora',
          content: 'Second-content',
        },
        {
          title: 'Servicio',
          content: 'Second-content',
        },
      ],
      servicios:[
            {
                name:'MASAJE',
                items:[
                  'DECONTRACTURANTE',
                  'ESPALDA',
                  'PIERNAS',
                  'BRAZO',
                  'MANOS',
                  'PIES',
                  'CARA',
                  'RELAJANTE',
                  'CUERPO COMPLETO',
                  'DORSO',
                  'TORSO',
                  'ABDOMEN',
                  'ANITI EXTREÑIMIENTO'
              ]
            },
            {
                name:'LIMPIEZAS',
                items:[
                'FACIAL',
                'OIDOS',
                'ESPALDA'
              ]
            },
            {
                name:'UÑAS',
                items:[
                'GELISH',
                'ACRILICAS'
              ]
            },
            {
                name:'DEPILACION',
                items:[
                'BOZO',
                'CEJA',
                'BIKINI',
                'MEDIA PIERNA',
                'PIERNA COMPLETA'
              ]

            },
            {
                name: ' PIES Y MANOS',
                items:[
                'MANICURA',
                'PEDICURA'
              ]
            }
        ],
    }
  },
  mounted () {
   
  },
  created(){
    this.$notify({
      group: 'citas',
      title: 'Bienvenido',
      text: 'Selecciona un dia para agendar tu cita'
    });
  },
  components : {
	'full-calendar': require('vue-fullcalendar')	
  },
  methods:{
    hideModal(){
      this.open = false
    },
    selectService(index){
          this.selectedServiceIndex = index
          
          this.selectService = this.servicios[index]
          console.log(JSON.stringify(this.selectService))
          this.block = this.block + 1
      },
      selectSubServiceF(servicio){
          this.selectedSubService = servicio
          this.block = this.block + 1
      },
    dayClick:function(day, event){
      console.log("preparar cita para ese dia"+day)
      let dia = moment(day)
      console.log(dia.format("MM-DD-YYYY"))
      this.diaCita = dia.format("DD-MM-YYYY")
      //this.$modal.show('example')
      this.open = true
      
    },
    onChange(time, timeString) {
      console.log(time, timeString);
      console.log(JSON.stringify(time))
      console.log(timeString)
      this.hora = timeString
    },
    disabledHoursF(){
      return [0,1, 2, 3,4,5,6,7,8,9,10,21,22,23,24]
    },
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    saveCita(){
      let ser = this.selectService.name + " - "+this.selectedSubService
      var m  = {nombre: this.userName,
            telefono: this.userPhone,
            dia: this.diaCita,
            hora: this.hora,
            servicio: ser}
            console.log(m)
      db.collection("citas")
          .add({
            nombre: this.userName,
            telefono: this.userPhone,
            dia: this.diaCita,
            hora: this.hora,
            servicio: ser
          })
          .then(() => {
            this.$notify({
              group: 'citas',
              title: 'Listo',
              text: 'Se ha agendado tu cita'
            });
            this.$modal.hideAll()
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
    }
    
  }

  
}
</script>
<style >

.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.vm--modal{
  height:400px !important
}
</style>