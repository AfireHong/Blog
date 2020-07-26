<template>
  <div id="home">
    <div class="banner">
      <div class="banner-wrap">
        <div class="inner-text">
          <h2>I KNOW</h2>
          <h2>EVERYTHING HAPPENS</h2>
          <h2>FOR A REASON</h2>
          <h1>BUT WHAT THE FUCK</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="post-list">
        <PostCard/>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '../../components/PostCard'
export default {
    name:'Home',
    components:{
      PostCard
    }
}

</script>
<style scope>

.banner{
  height: 50vh;
  min-height: 500px;
  background: url(../../assets/bg_img.jpg) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.banner-wrap{
    height:100%;
    width:100%;
    background: rgba(0,0,0,.6);
}

.inner-text{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: azure;
}

.container {
  margin: 0 auto;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width:576px)
{.container{max-width:540px}
}

@media (min-width:768px){
  .container{max-width:720px}
}

@media (min-width:992px){
  .container{max-width:940px}
}

@media (min-width:1200px){
  .container{max-width:960px}
}
.post-list{
  width: 100%;
}
</style>