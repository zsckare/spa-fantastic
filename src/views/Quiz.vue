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
        <div class="col-6 " >
            <div class="card card-custom bg-white border-white border-0">
                <div class="card-custom-img" style="background-image: url(images/banner-spa.jpg);"></div>
                    <div class="card-custom-avatar">
                        <img class="img-fluid" src="images/logo.png" alt="Avatar" />
                    </div>
                <div class="card-body" style="overflow-y: auto">
                    <h4 class="card-title">Encuesta de Calidad</h4>
                    <p class="card-text"></p>
                </div>
                <div class="card-footer" style="background: inherit; border-color: inherit;">
                    <a href="#" class="btn btn-rosa">Anterior</a> 
                    <a href="#" class="btn btn-outline-primary" style="margin-left:5px">Siguiente</a>
                </div>
            </div>
        </div>
       
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Quiz',
  components: {
  }
}
</script>

<style >
.btn-rosa{
    background-color: #f9c3cc;
    color:white;
    text-shadow: 2px 2px 2px #000000;
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

</style>