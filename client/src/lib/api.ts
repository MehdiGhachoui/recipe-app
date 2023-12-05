import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import {
    errorInterceptor,
    requestInterceptor,
    successInterceptor,
} from './interceptors';

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: "http://127.0.0.1:8080",
    responseType: 'json',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': "application/json",
    },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export { api };