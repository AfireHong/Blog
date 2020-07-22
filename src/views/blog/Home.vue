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
    <div class="">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae mollitia dicta odio, accusamus maiores inventore rem sapiente modi fuga 
        voluptatem cupiditate perferendis asperiores obcaecati natus? Quod fugiat libero exercitationem.</h1>
    </div>
  </div>
</template>

<script>
export default {
    name:'Home'
}

</script>
<style>
.banner{
  height: 100vh;
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
</style>