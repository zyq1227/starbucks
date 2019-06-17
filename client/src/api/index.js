import request from '../utils/request';

export default {
    //登陆
    islogin:()=>request.get('/api/user/info'),
    //判断登陆
    login:(data)=>request.post('/api/login',data),
    //获取列表
    getlist:(data)=>request.get('/api/task/list',data),
    //获取加班详情
    overtimeDetail:(data)=>request.get('/api/apply/overtime',data),
    //获取休假详情
    vacationDetail:(data)=>request.get('/api/apply/vacation',data), 
    // getdetail:(data)=>request.get(,data)
    //上传图片
    commitFile:(file)=>request.post('/api/upload',file),
    //提交加班
    overtimecommit:(data)=>request.post('/api/apply/overtime',data),
    //提交休假
    vacationcommit:(data)=>request.post('/api/applyacation',data),
    //申请历史
    history:(data)=>request.get('/api/task/history',data),

} 