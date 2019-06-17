<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
import Title from './components/title';
import Main from './components/main';
import request from './utils/request';

export default {
  name: 'App',
  components:{ 
    Title,
    Main
  },
  created(){
    request.get('/api/user/info').then(res=>{
      // console.log(res)
    }).catch(error => {
      // console.log(error)
    })
  } 
}
</script>

<style scoped lang="scss">
@import './static/scss/common.scss';
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
  
}
a{
  color: #000;
}
html,body,#app,.root,.wrap{
  width: 100%;
  height: 100%;
}
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.root{
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  header{
    width: 100%;
    height: pxTorem(30px);
  }
  .tab_title{
    width: 100%;
    height: pxTorem(100px);
  }
  main{
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto; 
    background: #eee;
  }
}
</style>
