import axios from "axios";

interface optionsType {
  url: string;
  method: string;
  params?: object;
  data?: object;
}

function ajax(options: optionsType) {
  // const {url} = options;
  //创建一个Promise实例
  return new Promise((resolve:Function, reject:Function) => {
    try {
      //创建一个axios的实例
      const axiosInstance = axios.create({
        //创建实例,基础配置
        // baseURL: url,
        timeout: 7000,
      });

      //请求服务器之前做拦截
      axiosInstance.interceptors.request.use((request:any) => {
        //请求之前 可以在请求头加入token  其他敌方容易扰乱参数
        // if (localStorage.getItem("token")) {
        //   let token = localStorage.getItem("token");
        //   request.headers.Authorization = `Bearer ${token}`; //此处固定写法
        // }
        //拦截完处理后，进行放行继续跟服务器通信  响应拦截也是
        return request;
      });

      //响应数据后进行拦截再放行
      axiosInstance.interceptors.response.use((response) => {
        return response;
      });
      //该实例外部传入的对象
      axiosInstance(options)
        .then((res) => {
          if (res.data.code === 200) {
            //服务端200状态返回
            resolve(res.data);
          } else {
            //服务端500状态返回
            resolve(res.data);
          }
        })
        .catch((err:any) => {
          //发送请求失败的处理  包括401认证失败处理
          reject(err);
        });
    } catch (err) {
      console.warn(`ajax语法错误${err}`);
    }
  });
}

export default ajax;
