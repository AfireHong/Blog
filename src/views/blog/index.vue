<template>
  <div id="wrapper">
      <Header />
      <div id="content"><router-view></router-view></div>
  </div>
</template>

<script>
import Header from './Header'
export default {
    data(){
        return{
            
        }
    },
    components:{
        Header,
    },
    methods:{
    }
}

</script>
<style>
</style>