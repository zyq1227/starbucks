<template>
    <header class="header">
        <div class="ico">
            <i @click="$router.back()" class="iconfont icon-icon_left"></i>
        </div>
        <div class="text_title">
            <slot>
                
            </slot>
        </div>
        <div class="ico icoright">
            <i class="iconfont">&#xeb91;</i>
            <router-link to="search">
               <i class="iconfont">&#xebb1;</i> 
            </router-link>
        </div>
    </header>
</template>
<script>
export default {
    props:{
 
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import '../static/scss/common.scss';
    .header{
        width: 100%; 
        height: pxTorem(30px);
        font-size: pxTorem(20px);
        display: flex;
        padding: 0 3%;
        box-sizing: border-box;
        align-items: center;
    }
    .text_title{
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ico{
        flex: 1;
    }
    .icoright{
        display: flex;
    }
    .icoright i{
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .iconfont{
        font-size: pxTorem(20px);
    }
</style>