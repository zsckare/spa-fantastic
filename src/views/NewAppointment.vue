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
        <div class="col-lg-6 col-sm-8 " >
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Agendar Cita</h4>
              <full-calendar :events="fcEvents" @dayClick="dayClick" locale="es"></full-calendar>
            </div>
          </div>
        </div>
      </div>

      
      <!-- modal nueva cita -->
      <modal name="example">This is an example</modal>



    </div>
</template>
<script>
import firebase from "../firebaseConfig";
const db = firebase.firestore();
export default {
  name: 'NewAppointment',
  data () {
    return {
      fcEvents : []
    }
  },
  mounted () {
   
  },
  created(){
    this.$notify({
  group: 'citas',
  title: 'Important message',
  text: 'Hello user! This is a notification!'
});
  },
  components : {
	'full-calendar': require('vue-fullcalendar')	
  },
  methods:{
    dayClick:function(day, event){
      console.log("preparar cita para ese dia"+day)
    }
  }

  
}
</script>
<style >
</style>