<template>
  <div class="about">



    
    <full-calendar :events="fcEvents" @dayClick="dayClick" locale="es"></full-calendar>

  </div>
</template>
<script>

let demoEvents = [
    {
      title    : 'Sunny 725-727',
      start    : '2020-02-25',
      end      : '2020-02-27',
      cssClass : 'family'
    },
    {
      title : 'Lunfel 726-727',
      start : '2020-02-26',
      end : '2020-02-27',
      cssClass : ['home', 'work']
    },
    {
      title : 'Lunfel 2/27-2/28',
      start : '2020-02-27',
      end : '2020-02-28'
    },
    {
        title : 'Lunfel 2/27-2/28',
        start : '2017-02-27',
        end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/27-2/28',
        start : '2017-02-27',
        end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/26-3/05',
        start : '2017-02-26',
        end : '2017-03-05'
    },
    {
        title : 'Lunfel 1/27-1/28',
        start : '2017-01-27',
        end : '2017-01-28'
    },
    {
        title : 'Lunfel 1/27-2/2',
        start : '2017-01-27',
        end : '2017-02-02'
    },
    {
        title : 'Lunfel 3/27-3/28',
        start : '2017-03-27',
        end : '2017-03-28'
    },
  ];
export default {
  data () {
	return {
	  fcEvents : demoEvents
	}
  },
  created:function(){
    moment.locale("es")
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