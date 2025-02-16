import axios from 'axios';

const baseURL = '/api';

class HttpRequest {
  constructor(baseURL) {
    if (!HttpRequest.instance) {
      this.instance = axios.create({
        baseURL: baseURL, // 設定 baseURL
        headers: {} // 預設 headers
      });
      this.interception(); // 設定攔截器
      HttpRequest.instance = this; // 存儲實例
    }
    return HttpRequest.instance; // 確保只返回同一個實例
  }

  // 設定攔截器
  interception() {
    this.instance.interceptors.request.use(
      config => {
        // // 加入 token（如果有）
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
      },
      error => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      response => response, //.data, // 只回傳 response.data，簡化 API 調用
      error => {
        // if (error.response) {
        //   if (error.response.status === 401) {
        //     console.warn("未授權，請重新登入");
        //     window.location.href = '/login';
        //   } else if (error.response.status === 500) {
        //     console.error("伺服器錯誤，請稍後再試！");
        //   }
        // } else {
        //   console.error("網路錯誤，請檢查您的連線！");
        // }
        return Promise.reject(error);
      }
    );
  }

  // 讓所有請求共用同一個 axios 實例
  request(options) {
    return this.instance(options);
  }
}

// **確保只有一個實例**
const httpInstance = new HttpRequest(baseURL);
export default httpInstance;

// import axios from 'axios';

// const baseUrl = '/api';

// class HttpRequest {
//   constructor(baseUrl) {
//     this.baseUrl = baseUrl;
//   }
//   getConfig() {
//     const config = {
//       baseUrl: this.baseUrl,
//       header: {}
//     };
//     return config;
//   }
//   interception(instance) {
//     instance.interceptors.request.use(function (config) {
//       return config;
//     }, function (error) {
//       return Promise.reject(error);
//     });
//     instance.interceptors.response.use(function (response) {
//       return response;
//     }, function (error) {
//       return Promise.reject(error);
//     });
//   }
//   request(options) {
//     options = { ...this.getConfig(), ...options };
//     const instance = axios.create();
//     this.interception(instance);
//     return instance(options);
//   }
// };

// export default new HttpRequest(baseUrl);