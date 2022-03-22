import axios from 'axios'

const instance = axios.create({

})

// 返回请求队列
instance.list = []

// 请求拦截
instance.interceptors.request.use(
    config => {
        if (config.url.includes("login")) {
            return config
        } else {
            if (!sessionStorage.getItem("dataAnalysis_userInfo")) {
                this.$router.push("/login");
            } else {
                return config
            }
        }


    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
instance.interceptors.response.use(response => {
    let data = response.data
    return data
}, error => {
    console.log('响应失败: ', error)
    // Vue.prototype.$message({
    //     message:"请求失败",
    //     type:"error"
    // })
    return Promise.reject(error)
})

export default instance
