<template>
    <div class="warp">
        <header>
            <p>&times;</p>
            <h2>欢迎来到星享俱乐部</h2>
        </header>
        <div class="logincont">
            <input type="text" class="sj" placeholder="手机号码" v-model="phone_value">
            <input type="text" class="yanzheng" placeholder="验证码" v-model="pwd_value">
            <span class="loginbtn" @click="handlelogin()">登陆/注册</span>
            <p>使用账号密码登陆</p>
        </div>
        
    </div>
</template>
<script>
import api from '../../api/index'
export default {
    props:{

    },
    components:{

    },
    data(){ 
        return {
            phone_value:'',
            pwd_value:'',
            phoneReg:/^1[3579]\d{9}$/
        }
    },
    computed:{
        
    },
    methods:{
        handlelogin(){
            if(this.pwd_value.trim()!==''&&this.phoneReg.test(this.phone_value)){
                api.login({
                    phone:this.phone_value,
                    password:this.pwd_value
                }).then(data=>{
                    let {token} = data;
                    window.localStorage.setItem('token',token)
                    this.$router.back();
                }).catch(error=>{
                    alert(erroe.response.data.message)
                })
            }else{
                alert('密码和用户名输入有误')
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';

.warp{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
        width: 100%;
        height: pxTorem(100px);
        box-shadow: 15px 0 15px 0 #ccc;
        padding: 0 3%;
        box-sizing: border-box;
        z-index: 889;
        p{
            font-size: pxTorem(30px)
        }
        h2{
            font-size: pxTorem(30px)
        }
    }
    .logincont{
        width: 100%;
        flex: 1;
        background: rgb(250, 247, 247);
        z-index: 88;
        .sj{
            width: 92%;
            margin-left: 4%;
            height:pxTorem(35px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #ccc;
            margin-top: pxTorem(25px);
        }
        .yanzheng{
            width: 92%;
            margin-left: 4%;
            height:pxTorem(35px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #ccc;
            margin-top: pxTorem(25px);
        }
        .loginbtn{
            display: block;
            background: rgb(163, 160, 160);
            color: #fff;
            width: 92%;
            height: pxTorem(45px);
            border-radius:  pxTorem(45px);
            line-height: pxTorem(45px);
            text-align: center;
            margin-left: 4%;
            margin-top: pxTorem(75px);
            font-size: pxTorem(18px);
        }
        p{
            width: 100%;
            height: pxTorem(20px);
            line-height: pxTorem(20px);
            text-align: center;
            margin-top: pxTorem(30px);
            color: darkgreen;
        }
    }
    
}

</style>