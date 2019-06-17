<template>
    <div class="root">
        <Head>加班/休假</Head>
        <Title @change="tableMenu"></Title>
        <navTitle @change="tabTitle" :tag='dataOptions.type'></navTitle>
        <Main :count='count'></Main>
        
    </div>
</template>
<script>
import Head from '../../components/head';
import Title from '../../components/title';
import Main from '../../components/main';
import navTitle from '../../components/navTitle'
import api from '../../api/index';
import {mapActions} from 'vuex'
export default {
    props:{

    },
    components:{
        Head,
        Title,
        Main,
        navTitle
    },
    data(){
        return {
          dataOptions:{
            page:1,
            pageSize:10,
            create_at:0,
            type:'overtime',
            status:0,
          },
          count:[]
        }
    },
    computed:{

    },
    methods:{
      ...mapActions('user',['getUserinfo']),


      getTasklist(){

        api.getlist({params:this.dataOptions}).then(res=>{
          console.log(res)
          this.count = res.data
        })
      },
      //切换最上面的导航
      tableMenu(status){
        // console.log(status)
        this.dataOptions.status = status;
        this.dataOptions.type = 'overtime';
        this.getTasklist();

      },
      //切换加班和休假
      tabTitle(type){
        this.dataOptions.type = type;
        this.getTasklist();
      }
    },
    created(){
      this.getUserinfo()
      this.getTasklist();
    },  
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
.root{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  header{
    width: 100%;
    height: pxTorem(30px);
    font-size: pxTorem(20px);
    display: flex;
    padding: 0 3%;
    box-sizing: border-box;
    align-items: center;
  }
  .tab_title{
    width: 100%;
    height: pxTorem(100px);
  }
  .navTitle{
    width: 100%;
    height: pxTorem(70px);
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