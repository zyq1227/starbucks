import api from '../../api/index'
export default {
    namespaced:true,
    state:{
        userinfo:{}
    },
    mutations:{
        setuser(state,data){
            state.userinfo = data
        }
    },
    actions:{
        getUserinfo(context){
            api.islogin().then(res=>{
                context.commit('setuser',res.data)
            })
        }
    },
    getters:{

    }
}