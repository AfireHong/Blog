<template>
  <div id="wrapper">
      <Header/>
      <div id="content"><router-view></router-view></div>
      <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    data(){
        return{
            
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
    }
}

</script>
<style>
</style>