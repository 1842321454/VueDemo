/**
 * 二次封装axios
 */
import axios from 'axios'
import { ElMessage } from 'element-plus';

//创建axions实例
const server = axios.create({
    baseURL: '/api',
    timeout: 5000
})

//请求拦截器
server.interceptors.request.use(req => {
    return req;
})

//响应拦截器
server.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data;
    } else {
        ElMessage("系统异常");
    }
})

//请求核心方法
/**
 * 
 * @param {*} options axios的配置
 */
function request(options) {
    server.defaults.baseURL='https://mock.presstime.cn/mock/67c022bfb1cc7302801e1b31/example'
    return server(options);
}

export default request;

