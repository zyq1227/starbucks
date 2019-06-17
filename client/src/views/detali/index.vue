<template>
    <div class="wrap bg">
        <div class="top">
            <Head>办公室加班申请表</Head>
            <div class="title_top">
                <div class="title_img">
                    <img :src="detailData.avatar" alt="">
                </div>
                <div>
                    <p>申请人姓名</p>
                    <p>直接主管</p>
                    <p>申请单号</p>
                    <p>发起时间</p>
                </div>
                    <div>
                    <p>{{detailData.nickname}}</p>
                    <p>你猜</p>
                    <P>{{detailData.applicationNumber}}</P>
                    <p>{{toTime(detailData.create_at)}}</p>
                </div>
                    <div>
                    <p>&gt;</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="meg">
                <h3>申请信息</h3>
                <p>
                    <span>加班日期<i>*</i></span>
                    <span>{{toTime(detailData.startTime)}}</span>
                </p>
                <p>
                    <span>加班类型<i>*</i></span>
                    <span>{{detailData.list_type==='overtime' ? '工作日加班' : '休假'}}</span>
                </p>
                <p>
                    <span>加班起始时间<i>*</i></span>
                    <span>{{toString(detailData.startTime)}}</span>
                </p>
                <p>
                    <span>加班截止时间<i>*</i></span>
                    <span>{{toString(detailData.endTime)}}</span>
                </p>
                <p>
                    <span>共计时数<i>*</i></span>
                    <span>{{times(detailData.startTime,detailData.endTime)}}</span>
                </p>
            </div>
            <div class="reason">
                <h3>加班事由</h3>
                <p>
                    {{detailData.describes}}
                </p>
            </div>
            <div class="reason img">
                <h3>附件</h3>
                <p>
                    <img :src="'http://localhost:3000'+item" alt="" v-for="(item,i) in detailData.annex" :key="i"/>
                </p>
            </div>
        </div>
        <footer class="footer">
            <span>审批历史</span>
            <p class="quit">退出</p>
            <p class="argee">同意</p>
        </footer>
    </div>
</template>

<script>
import Head from '@/components/head'
import api from '../../api/index';
import { mapActions } from "vuex";
export default {
    props:{
        type:String,
        id:String
    },
    components:{
        Head
    },
    data() {
    return {
        detailData:{}
    };
  },
  computed: {},
  methods: {
    ...mapActions("user", ["userInfo"]),
    
    getdata(){
        api[`${this.type}Detail`]({params:{applicationNumber:this.id}}).then(res=>{
            console.log(res)
            this.detailData = res.data
        })
    },
        
    toTime(time) {
      return new Date(time).toLocaleDateString();
    },
    toString(time){
        return new Date(time).toLocaleString()
    },
    times(startTime, endTime) {
      let newTime = new Date(endTime) - new Date(startTime);
      let days = parseInt(newTime / 1000 / 60 / 60 / 24);
      let hours = parseInt((newTime / 1000 / 60 / 60) % 24);
      return days+'.'+hours+'天'
    },
  },
  created() {
    this.userInfo();
    this.getdata()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
.top {
  background: #0b6242;
  border-radius: 0 0 15% 15%;
  width: 100%;
  height: pxTorem(200px);
  header{
    width: 100%;
    height: pxTorem(30px);
    font-size: pxTorem(20px);
    display: flex;
    padding: 0 3%;
    box-sizing: border-box;
    align-items: center;
  }
  .title_top{
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #CDFFF1;
    font-size: pxTorem(14px);
    padding-bottom: pxTorem(40px);
    P{
        line-height: pxTorem(30px);
    }
    img{
        width: pxTorem(70px);
        height: pxTorem(70px);
        border-radius: 50%;
    }
  }
}
.content{
    width: 94%;
    margin-left: 3%;
    margin-top: pxTorem(-24px);
    flex: 1;
    overflow: auto;
    .meg{
        width: 100%;
        background: #fff;
        border-radius: pxTorem(8px);

        h3{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
        }
        >p{
            width: 94%;
            height: pxTorem(40px);
            margin-left: 3%;
            display: flex;
            justify-content: space-between;
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            span:nth-child(1){
                color: #A6A6A6;
                i{
                    color: red;
                }
            }
        }
    }
    .reason{
        width: 100%;
        margin-top: pxTorem(16px);
        background: #fff;
        border-radius: pxTorem(8px);
        h3{
            width: 94%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
            margin-left: 3%;
        }
        >p{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(60px);
            font-size: pxTorem(14px);
            padding-top: pxTorem(3px);
        }
    }
    .img{
        >p{
            width: 100%;
            height: pxTorem(120px);
            display: flex;
            img{
                width: pxTorem(120px);
                height: pxTorem(120px);
            }
        }
    }
}
.footer{
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    line-height: pxTorem(50px);
    font-size: pxTorem(14px);
    span{
        width: pxTorem(80px);
        height: 100%;
        text-align: center;

    }
    p{
        flex: 1;
        text-align: center;
    }
    .quit{
        background: #404A53;
        color: #fff
    }
    .argee{
        background: #0b6242;
        color: #fff;
    }
}
.bg{
    background: #F6F6F6;
    display: flex;
    flex-direction: column;
}
</style>