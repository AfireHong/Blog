<template>
  <div class="header">
      <div class="logo">AfireHong</div>
      <ul class="nav-menu" :class="{open:nav_show}">
        <router-link v-for="(item, index) in nav_items" :item="item" :key="index" :class="{lianimation:nav_show}" tag="li" :to="item.path" >{{item.title}}</router-link>
      </ul>

      <div class="burger" @click="nav_click" :class="{active:nav_show}">
        <div class="top-line"></div>
        <div class="middle-line"></div>
        <div class="bottom-line"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Header",
    props:{
      scroll:Boolean
    },
    data(){
      return{
        nav_show:false,
        nav_items:[
          {title:'主页', path: '/home'},
          {title:'文章', path: '/articles'},
          {title:'关于', path: '/about'},
          {title:'留言', path: ''},
          {title:'友链', path: ''},
        ]
      }
    },
    methods:{
      nav_click(){
        if(this.nav_show){
          this.nav_show = false
        }else{
          this.nav_show = true
        }
      },
    },
    computed: {
      
    },

}

</script>
<style scope>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  height: 80px;
  /* background: #2f3640; */
  background-color:rgba(47, 54, 64, 0.9)
}

.logo {
  font-size: 24px;
  font-weight: 600px;
  color: #dadbdd;
  flex: 1;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
  max-width: 550px;
}

.nav-menu li{
  list-style: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: .2s linear;
}

.nav-menu li:hover{
  color: aquamarine;
}

.burger div{
  width: 25px;
  height: 3px;
  background: #dadbdd;
  margin: 4px;
}

.burger{
  display: none;
}

@media screen and (max-width: 768px){
  .nav-menu{
    position: fixed;
    top: 0;
    padding: 80px 0;
    right: 0;
    width: 50vw;
    height: calc(100vh - 80px);
    background-color:rgba(47, 54, 64, 0.9);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: translateX(100%);
    transition: 0.4s ease-in-out;
  }

  .nav-menu.open{
    transform: translateX(0);
  }

  .nav-menu li{
    margin: 3vh;
    transform: translateX(20px);
    opacity: 0;
  }

  .burger{
    display: block;
  }

  .burger.active div{
    transition: 0.3s ease-in-out 0.3s;
  }

  .burger.active .top-line{
    transform: rotate(45deg) translate(4px, 6px);
  }

  .burger.active .bottom-line{
    transform: rotate(-45deg) translate(4px, -6px);
  }

  .burger.active .middle-line{
    opacity: 0;
    transform: translateX(10px);
    transition: 0.3s ease-in-out;
  }

  @keyframes slideIn {
    from{
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .lianimation {
    animation: 0.3s ease-in slideIn forwards 0.3s;
  }
}
</style>

