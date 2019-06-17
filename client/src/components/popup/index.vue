<template>
    <div class="popdialong" v-show="popup">
        <div class="mask" @click="$emit('pophidd')"></div>
        <div class="popdiv">
            <div @click="$router.push('/commit/overtime')">加班</div>
            <div @click="$router.push('/commit/vacation')">休假</div>
        </div>
    </div>
</template>
<script>
export default {
    props:['popup'],
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
@import './../../static/scss/common.scss';
.popdialong{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    left: 0;
    top: 0;
    z-index: 11;
    display: flex;
    flex-direction: column;
    .mask{
        flex: 1;
    }
    .popdiv{
        width: 100%;
        height: pxTorem(100px);
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;

        div{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>