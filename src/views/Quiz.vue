<template>
  <div class="quiz">
    

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
        <div class="col-lg-6 col-sm-8 " >
            <div class="card card-custom bg-white border-white border-0">
                <div class="card-custom-img" style="background-image: url(images/banner-spa.jpg);"></div>
                    <div class="card-custom-avatar" >
                        <img class="img-fluid" src="images/logo.png" alt="Avatar" style="background-color:white" />
                    </div>
                <div class="card-body" style="overflow-y: auto">
                    <h4 class="card-title">Encuesta de Calidad</h4>
                    
                    <div class="" v-if="block === 0">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Nombre</label>
                                    <input type="text" class="form-control" v-model="nombre">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Edad</label>
                                    <input type="text" class="form-control" v-model="edad">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Sexo</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="sexo">
                                    <option value="FEMENINO">FEMENINO</option>
                                    <option value="MASCULINO">MASCULINO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Estatura</label>
                                    <input type="text" class="form-control" v-model="estatura">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Peso</label>
                                    <input type="text" class="form-control" v-model="peso" >
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Estado Civil</label>
                                    <input type="text" class="form-control" v-model="estadoCivil">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Direccion</label>
                                    <input type="text" class="form-control" v-model="direccion">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Telefono</label>
                                    <input type="text" class="form-control" v-model="numero" >
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- select main service -->
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
                    <!-- end select subservice -->

                    <!-- start alimentacion -->
                     <div class="row " v-if="block === 3 ">
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <h4 class="center-text"> EXPLÍCANOS TU ALIMENTACIÓN REGULAR </h4>   
                                </div>
                            </div>
                            <div class="row custom-border" :key="alimento.name" v-for="(alimento,index) in alimentos ">
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <h3 class="toUpperCase">{{alimento.name}}</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                           <div class="md-radio md-radio-inline">
                                                <input class="" type="radio" :id="index+'a'" value="Diario" v-model="alimentos[index].value">
                                                <label class="" :for="index+'a'">Diario</label>
                                            </div>
                                            <div class="md-radio md-radio-inline">
                                                <input class="form-check-input" type="radio" :id="index+'aa'" value="Cada tercer dia" v-model="alimentos[index].value">
                                                <label class="form-check-label" :for="index+'aa'">Cada tercer dia</label>
                                            </div>
                                            <div class="md-radio md-radio-inline">
                                                <input class="form-check-input" type="radio" :id="index+'aaa'" value="Semanal" v-model="alimentos[index].value">
                                                <label class="form-check-label" :for="index+'aaa'">Semanal</label>
                                            </div>

                                            <div class="md-radio md-radio-inline">
                                                <input class="form-check-input" type="radio" :id="index+'aaaa'" value="Mensual" v-model="alimentos[index].value">
                                                <label class="form-check-label" :for="index+'aaaa'">Mensual</label>
                                            </div>
                                            <br>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end alimentacion -->

                    <!-- start fisic -->
                    <div class="row " v-if="block === 4 ">
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <h4 class="center-text"> EXPLÍCANOS TU ACTIVACIÓN FÍSICA REGULAR  </h4>   
                                </div>
                            </div>
                            <div class="row custom-border" :key="alimento.name" v-for="(alimento,index) in actividadFisica ">
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <h3 class="toUpperCase">{{alimento.name}}</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                           <div class="md-radio md-radio-inline">
                                                <input class="" type="radio" :id="index+'a'" value="Diario" v-model="alimentos[index].value">
                                                <label class="" :for="index+'a'">Diario</label>
                                            </div>
                                            <div class="md-radio md-radio-inline">
                                                <input class="form-check-input" type="radio" :id="index+'aa'" value="Cada tercer dia" v-model="alimentos[index].value">
                                                <label class="form-check-label" :for="index+'aa'">Cada tercer dia</label>
                                            </div>
                                            <div class="md-radio md-radio-inline">
                                                <input class="form-check-input" type="radio" :id="index+'aaa'" value="Semanal" v-model="alimentos[index].value">
                                                <label class="form-check-label" :for="index+'aaa'">Semanal</label>
                                            </div>

                                            <div class="md-radio md-radio-inline">
                                                <input class="form-check-input" type="radio" :id="index+'aaaa'" value="Mensual" v-model="alimentos[index].value">
                                                <label class="form-check-label" :for="index+'aaaa'">Mensual</label>
                                            </div>
                                            <br>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer" style="background: inherit; border-color: inherit;">
                    <a href="#" class="btn btn-rosa" v-if="block !=0" @click="goBack">Anterior</a> 
                    <a class="btn btn-outline-primary" style="margin-left:5px" @click="nextSection">Siguiente</a>
                    
                </div>
            </div>
        </div>
       
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "../firebaseConfig";
const db = firebase.firestore();
export default {
  name: 'Quiz',
  components: {
  },
  data:function(){
      return{
          block:0,
          nombre:'',
          edad:'',
          sexo:'',
          estatura:'',
          peso:'',
          estadoCivil:'',
          direccion:'',
          numero:'',          
        selectedService:[],
        selectedSubService:'',
        selectedServiceIndex:0,
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
        alimentos:[
            {
                name:'verduras',
                value:''
            },
            {
                name:'frutas',
                value:''
            },
            {
                name:'frituras',
                value:''
            },
            {
                name:'carnes',
                value:''
            },
            {
                name:'pastas',
                value:''
            },
            {
                name:'pastel',
                value:''
            },
            {
                name:'mariscos',
                value:''
            },
            {
                name:'chocolates',
                value:''
            },
            {
                name:'pan',
                value:''
            },
            {
                name:'pescado',
                value:''
            }
        ],
        actividadFisica:[
            {
                name:'caminar',
                value:''
            },
            {
                name:'trotar',
                value:''
            },
            {
                name:'correr',
                value:''
            },
            {
                name:'aerobics',
                value:''
            },
            {
                name:'zumba',
                value:''
            },
            {
                name:'gym',
                value:''
            },
            {
                name:'natacion',
                value:''
            },
            {
                name:'pilates',
                value:''
            },
            {
                name:'fitness',
                value:''
            },
            {
                name:'cardio',
                value:''
            }
        ]
      }
  },
  methods:{
      nextSection(){
          this.block = this.block + 1
          document.documentElement.scrollTop = 0;
      },
      goBack(){
          this.block = this.block - 1
      },
      selectService(index){
          this.selectedServiceIndex = index
          
          this.selectService = this.servicios[index]
          console.log(this.selectService)
          this.block = this.block + 1
      },
      selectSubServiceF(servicio){
          this.selectedSubService = servicio
          this.block = this.block + 1
      },
      saveQuiz(){
          db.collection("quiz")
          .add({readed:false})
          .then(() => {
            console.log("Document successfully written!");
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
  }

}
</script>

<style>

.btn-rosa{
    background-color: #f9c3cc;
    color:white;
    text-shadow: 2px 2px 2px #000000;
}
.btn-rosa:hover{
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
 text-shadow: 0px #000000;
}
.card-custom {
  overflow: hidden;
  min-height: 450px;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
}

.card-custom-img {
  height: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-color: inherit;
}

/* First border-left-width setting is a fallback */
.card-custom-img::after {
  position: absolute;
  content: '';
  top: 161px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 545px;
  border-left-width: calc(575px - 5vw);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: inherit;
}

.card-custom-avatar img {
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
  position: absolute;
  top: 100px;
  left: 1.25rem;
  width: 100px;
  height: 100px;
}

/* estilos radio button */
@import url(https://fonts.googleapis.com/css?family=Roboto);
@keyframes ripple {
  0% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0);
  }
  50% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
  }
}
.md-radio {
  margin: 16px 0;
}
.md-radio.md-radio-inline {
  display: inline-block;
}
.md-radio input[type="radio"] {
  display: none;
}
.md-radio input[type="radio"]:checked + label:before {
  border-color: #337ab7;
  animation: ripple 0.2s linear forwards;
}
.md-radio input[type="radio"]:checked + label:after {
  transform: scale(1);
}
.md-radio label {
  display: inline-block;
  min-height: 20px;
  position: relative;
  padding: 0 30px;
  margin-bottom: 0;
  cursor: pointer;
  vertical-align: bottom;
}
.md-radio label:before, .md-radio label:after {
  position: absolute;
  content: "";
  border-radius: 50%;
  transition: all 0.3s ease;
  transition-property: transform, border-color;
}
.md-radio label:before {
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.54);
}
.md-radio label:after {
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  transform: scale(0);
  background: #337ab7;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  background: #f0f0f0;
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #333;
}

section {
  background: white;
  margin: 0 auto;
  padding: 4em;
  max-width: 800px;
}
section h1 {
  margin: 0 0 2em;
}
section h3 {
  margin: 1.5em 0 0;
}

</style>