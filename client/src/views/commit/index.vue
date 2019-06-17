<template>
    <div class="wrap bg">
        <div class="top">
            <Head>办公室{{title()}}申请表</Head>
            <div class="title_top">
                <div class="title_img">
                    <img :src="userinfo.avatar" alt="">
                </div>
                <div>
                    <p>申请人姓名</p>
                    <p>直接主管</p>
                </div>
                    <div>
                    <p>{{userinfo.nickname}}</p>
                    <p>你猜</p>
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
                    <span>{{title()}}日期<i>*</i></span>
                    <span>
                        <el-date-picker 
                        v-model="date"
                        type="date" 
                        value-format="yyyy-MM-dd"
                        :default-value="new Date().toLocaleDateString()"
                        :placeholder="new Date().toLocaleDateString()"
                         />
                    </span>
                </p>
                <p>
                    <span>{{title()}}类型<i>*</i></span>
                    <span>
                        <select>
                            <option value="-1">默认选项</option>
                            <option v-for="(item) in this[type+'Types']" :key="item.id" :value="item.id">{{item.title}}</option>
                        </select>
                    </span>
                </p>
                <p>
                    <span>{{title()}}起始时间<i>*</i></span>
                    <span>
                        <el-time-picker v-model="startTime" format="HH:MM"/>
                    </span>
                </p>
                <p>
                    <span>{{title()}}截止时间<i>*</i></span>
                    <span>
                        <el-time-picker v-model="endTime" format="HH:MM" @change="getendTime"/>
                    </span>
                </p>
                <p>
                    <span>共计时数<i>*</i></span>
                    <span>{{times}}</span>
                </p>
            </div>
            <div class="reason">
                <h3>{{title()}}事由</h3>
                <p>
                    <input type="text" v-model="describe" />
                </p>
            </div>
            <div class="reason img">
                <h3>
                    <p>
                        <span>+</span>上传附件
                    </p>
                    <input type="file" @change="addpic" ref="filebtn" multiple>
                </h3>
                <div class="imgBox" v-show="flag">
                    <ul>
                        <li v-for="(item,i) in imgSrc" :key="i">
                        <img :src="'http://localhost:3000'+item" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer class="footer">
            <span>审批历史</span>
            <p class="quit">退出</p>
            <p class="argee" @click="submit">同意</p>
        </footer>
        
    </div>
</template>

<script>
import Head from '@/components/head'
import api from '../../api/index';
import Isfile from "@/utils/isFile";
import { mapActions,mapState } from "vuex";
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
            date:'',
            startTime:'',
            endTime:'',
            times:'',
            describe:'',
            flag: false,
            imgSrc:[],
            overtimeTypes:[
                {
                    id:0,
                    title:'双休日加班',
                },
                {
                    id:1,
                    title:'节假日加班',
                },
                {
                    id:2,
                    title:'工作日加班',
                },
            ],
            vacationTypes:[
                {
                    id:0,
                    title:'年假',
                },
                {
                    id:1,
                    title:'调休',
                },
            ]
        };
    },
    computed: {
        ...mapState('user',['userinfo']),
    },
    methods: {
        ...mapActions('user',['getUserinfo']),
        title(){
            return this.type=="overtime"?"加班":"休假"
        },
        getendTime() {
            let n =
                new Date(this.endTime).getTime() - new Date(this.startTime).getTime();
            if (n < 0) {
                alert("您的操作不合法");
                return;
            }
            this.times = (n / 1000 / 3600).toFixed(1) + "小时";
        },
        addpic(e) {
        let userImg = this.$refs.filebtn.files[0];

        let isCheck = new Isfile(userImg, {
            type: ["png", "gif", "jpg", "jpeg"],
            size: 3
        });
      
        if (isCheck.isFile() && isCheck.isSize()) {
            const formatdata = new FormData();
            formatdata.append("file", userImg);
            api.commitFile(formatdata).then(res => {
            let { url } = res;
            this.flag = true;
            this.imgSrc.push(url);
            });
        } else {
            this.$alerts("图片不对哟");
        }
        },
        submit() {
            if (this.typeed !== "" && this.startTime !== "" && this.endTime !== "" && this.describe!=='') {
                api[this.type + "commit"]({
                annex: this.imgSrc,
                describe: this.describe,
                startTime: this.startTime,
                endTime: this.endTime,
                type: this.typeed
                }).then(res => {
                let {code,msg}=res;
                alert(msg)
                this.$router.push('/home')
                });
            }else{
                alert('不能为空')
            }
        },
    change(e) {
        this.typeed = e.target.value;
    },
    quie() {
        (this.imgSrc = ""),
        (this.describe = ""),
        (this.startTime = ""),
        (this.endTime = ""),
        (this.typeed = "");
    }
    },
    created() {
        this.getUserinfo()
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
.img {
    h3 {
      position: relative;
      font-size: pxTorem(16px);
      p {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        span {
          width: pxTorem(20px);
          height: pxTorem(20px);
          background: #f7d04d;
          display: inline-block;
          color: #fff;
          border-radius: 50%;
          text-align: center;
          line-height: pxTorem(20px);
          margin-right: pxTorem(20px);
        }
      }
      input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
    }
    .imgBox{
      width: 100%;
      background: #fff;
      ul{
        width: 100%;
        display: flex;
        li{
          width: pxTorem(107px);
          height: pxTorem(107px);
          border: 1px solid #eee;
          box-sizing: border-box;
          padding: pxTorem(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>