<template>
    <div class="navTitle">
        <div class="box_title">
            <div class="box_title_ico"></div>
            <div class="box_title_div">
                <span v-for="(item,ind) in title" :key="ind" :class="[item.type==tag?'active':'']" @click="change(item.type)">{{item.title}}</span>
            </div>
            <div class="box_title_ico">
                <i class="iconfont icon-dingdan"></i>
                <i class="iconfont icon-icon_doc"></i>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    props:['tag'],
    components:{

    },
    data(){
        return {
            index:'overtime',
            title:[
                {
                    title:'加班',
                    type:'overtime'
                },
                {
                    title:'休假',
                    type:'vacation'
                }
            ],
        }
    },
    computed:{
        
    },
    methods:{
        change(type){
            this.index = type;
            this.$emit('change',type)
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

.box_title{
        width: 100%;
        height: pxTorem(70px);
        display: flex;
        justify-content: center;
        background:#fff;
        align-items: center;
        padding: 0 3%;
        box-sizing: border-box;
        .box_title_ico{
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
                flex: 1;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: pxTorem(22px);
                .iconfont{
                    
                }
            }
        }
        .box_title_div{
            flex: 6;
            width: 100%;
            height: pxTorem(30px);
            border: 1px solid #ccc;
            border-radius:pxTorem(30px);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                flex: 1;
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                &.active{
                    color: #fff;
                    background: #096241;
                }
            }
        }
    }
</style>