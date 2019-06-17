<template>
    <main>
        <div class="box">
           
            <div class="countlist">
                <Contlist :count='count'></Contlist> 
            </div>
            <b class="add_fixed" @click="popdelog">+ 发起任务</b>
        </div>
       <Popup :popup='popup' @pophidd="pophidds"></Popup>
    </main>
</template>
<script>
import Contlist from './contlist';
import Popup from './popup/index'
export default {
    props:['count'],
    components:{
        Contlist,
        Popup
    },
    data(){
        return {
            index:0,
            popup:false
        }
    },
    computed:{

    },
    methods:{
        popdelog(){
            this.popup=true
        },
        pophidds(){
            this.popup=false
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import './../static/scss/common.scss';
.box{
    width: 100%;
    height: 100%;
    background: #eee;
    // padding: 0 3%;
    box-sizing: border-box;
    
    .add_fixed{
        width: pxTorem(100px);
        height: pxTorem(40px);
        background: #096241;
        color: #fff;
        position: fixed;
        right: pxTorem(15px);
        bottom: pxTorem(20px);
        border-radius: pxTorem(40px);
        line-height: pxTorem(40px);
        text-align: center;
    }
}


</style>