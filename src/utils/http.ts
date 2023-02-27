/**
 * 网络请求配置文件 */
import config from '@/config';
import axios, { AxiosRequestHeaders } from "axios";
import { message } from 'antd';

const { timeout } = config;
const { VITE_SERVER_HOST, VITE_SERVER_PORT } = import.meta.env;

axios.defaults.timeout = timeout;
axios.defaults.baseURL = `${VITE_SERVER_HOST}:${VITE_SERVER_PORT}`;

// 请求拦截器

axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            "Content-Type": 'application/json',
        } as AxiosRequestHeaders;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)


// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        if (response.data.statusCode === 403) {
            console.log("数据过期")
        }
        return response;
    },
    (error) => {
        console.log("请求出错：", error);
    }
);

/**
 * 封装get请求
 * @param {*} url 请求地址
 * @param {*} params 请求参数
 * @returns 
 */
export function get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((response) => {
            print(url, params, response.data);
            resolve(response)
        })
            .catch((error) => {
                reject(error);
            })
    })
}

/**
 * 封装POST请求
 * @param {*} url 请求地址 
 * @param {*} data 请求数据
 * @returns 
 */
export function post(url: string, data: any) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err)
            }
        )
    })
}

/**
 * 封装PUT请求
 * @param {*} url 请求地址 
 * @param {*} data 请求参数
 * @returns 
 */
export function put(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                // 关闭进度条
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * 封装PATCH请求
 * @param {*} url 请求地址 
 * @param {*} data 请求参数
 * @returns 
 */
export function patch(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (error) => {
                customMessage(error)
                reject(error);
            }
        );
    });
}

/**
 * 封装统一返回方法
 * @param {*} fetch 请求方法
 * @param {*} url 请求地址
 * @param {*} params 请求参数
 * @returns 
 */
const http = (fetch: string, url: string, params: any) => {
    return new Promise((resolve, reject) => {
        switch (fetch) {
            case "get":
                get(url, params).then((response) => {
                    resolve(response)
                }).catch((error) => {
                    reject(error);
                })
                break;
            case "post":
                post(url, params).then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })
                break;
            default:
                break;
        }
    })
}

const customMessage = (error: any) => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                message.info(error.response.data.error.details);
                break;
            case 401:
                message.info("未授权，请登录");
                break;
            case 403:
                message.info("拒绝访问")
                break;
            case 404:
                message.info("请求地址出错")
                break;
            case 408:
                message.info("请求超时");
                break;
            case 500:
                message.info("服务器内部错误");
                break;
            case 501:
                message.info("服务未实现");
                break;
            case 502:
                message.info("网关错误");
                break;
            case 503:
                message.info("服务不可用");
                break;
            case 504:
                message.info("网关超时");
                break;
            case 505:
                message.info("HTTP版本不受支持");
                break;
            default:
        }
    }
}


/**
 * 输入响应数据
 * @param {*} url 
 * @param {*} params 
 * @param {*} response 
 */
function print(url:string, params: any, response: any) {
    console.log('#########Log Start#######');
    console.log(url)
    console.log(params);
    console.log(response);
    console.log('#######Log End#####')
}

export default http;