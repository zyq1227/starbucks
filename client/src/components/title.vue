<template>
    <div class="tab_title">
        <dl v-for="(item) in data" :key="item.status" @click="change(item.status)" :class="[index==item.status?'active':'']" >
            <dt :class="['iconfont', item.icon]"></dt>
            <dd>{{item.title}}</dd>
        </dl>
    </div>  
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            data:[
                {
                    icon:`icon-bofang`,
                    title:'待处理',
                    status:0
                },
                {
                    icon:'icon-icon_send',
                    title:'已发起',
                    status:1
                },
                {
                    icon:'icon-duigou',
                    title:'已处理',
                    status:2
                }
            ],
            index:0
        }
    },
    computed:{

    },
    methods:{
        change(status){
            this.index = status;
            this.$emit('change',status);
            
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
    .tab_title{
        display: flex;
        width: 100%;
        height: pxTorem(100px);
        box-shadow:0 15px 15px 0px #ccc;
        z-index: 10;
        dl{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #888;
            font-size: pxTorem(18px);
            flex-direction:column;
            &.active{
                color: #096241;
            }
        }
        .iconfont{
            font-size: pxTorem(22px);
            margin-bottom: 10px;
        }
    }
</style>