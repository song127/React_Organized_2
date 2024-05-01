import axios from 'axios';

const apiClient = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    baseURL: import.meta.env.VITE_API_URL
    // baseURL: 'https://example.com/'
});

// 요청 interceptor 정의
// 요청 직전 수행할 로직 지정
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers = {
            Authorization: `Bearer ${token}`
        } as any;
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)

// 응답 interceptor 정의
// 응답 직전 수행할 로직 지정
apiClient.interceptors.response.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

const { get, post, put, patch, delete: destroy } = apiClient;
export { get, post, put, patch, destroy };