<template>
  <el-row type="flex" class="post-card">
    <el-col :md="12" :xs="24" >
      <div class="post-banner">
        <a href="">
          <img src="https://s1.ax1x.com/2020/05/27/tFjgYQ.jpg">
        </a>
      </div>
      
    </el-col>
    <el-col :md="12" :xs="24">
      <div class="post-content">

      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
    name:'PostCard'
}

</script>
<style scope>
.post-card{
  flex-wrap:wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
}

.post-banner {
  margin: 0 auto;
  width: 100%;
  height: 280px;
  background: #000;
  overflow: hidden;
  padding: 0;
}

.post-banner img {
    width: 100%;
    height: 100%;
    margin-right: -40px;
}

@media (min-width: 768px){
  .post-banner {
    height: 230px;
  }
}

@media (min-width: 992px){
  .post-banner {
    height: 280px;
  }
}




</style>