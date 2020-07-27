<template>
<div class="post-item">
  <el-row class="post-card">
    <el-col :md="12" :xs="24">
      <div class="post-banner">
        <a href="">
          <img src="https://s1.ax1x.com/2020/05/27/tFjgYQ.jpg">
        </a>
      </div>
      
    </el-col>
    <el-col :md="12" :xs="24" class="post-content">
      <a href="#">
        <h1 class="post-title">我的博客第一篇文章标题</h1>
      </a>
      <p class="post-excerpt">我的博客第一篇文章摘要</p>

      <p class="post-meta">
        <a href="">分类</a>
        2020/07/20
      </p>
      <div class="post-readmore">
        <a href="" class="post-button">查看更多</a>
      </div>
    </el-col>
  </el-row>
</div>
  
</template>

<script>
export default {
    name:'PostCard'
}

</script>
<style scope>
.post-item{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
  box-shadow: 0 1px 10px #323232;
    -moz-box-shadow: 0 1px 10px #323232;
    -webkit-box-shadow: 0 1px 10px #4b4747;
}

.post-card{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
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

.post-title {
  transition: color .2s;
  overflow: hidden;
  height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.post-content{
  padding: 0 35px 10px 35px;
  background: rgba(47, 54, 64);
}

.post-content a{
  text-decoration: none;
  color: #fafafa;
}

.post-excerpt {
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-meta{
  margin: 16px 0;
}

.post-readmore{
  float: right;
}

.post-button{
  border: 3px solid #fafafa;
  border-radius: 30px;
  padding: 8px 12px;
  transition: all .2s;
}

.post-button:hover{
  color: #000;
  background: #fafafa;
}

@media (max-width: 767px) {
  .post-title {
    font-size: 1.5rem;
  }
  .post-readmore{
    display: none;
  }
}

@media (min-width: 768px){
  .post-banner {
    height: 230px;
  }

  .post-title {
    margin: 25px 0;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  .post-excerpt {
    height: 38px;
  }

  .post-readmore{
    display: none;
  }
}

@media (min-width: 992px){
  .post-banner {
    height: 280px;
  }

  .post-title {
    margin: 30px 0;
    margin-bottom: 25px;
  }

  .post-excerpt {
    height: 75px;
  }

  .post-readmore{
    display: block;
  }
}

@media (min-width: 1200px) {
  .post-title {
    margin: 30px 0;
    margin-bottom: 25px;
  }

  .post-excerpt {
    height: 72px;
  }

  .post-readmore{
    display: block;
  }
}


</style>