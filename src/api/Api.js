import axios from "axios";

const client = axios.create();

// 직접 호출 하면 요청url과 받는 응답 url이 다르고 에러남
// client.get('http://localhost:8080/api/v1/posts/1').then((res) => {
//     console.log(res.data)
// });

// export const check = () => client.get('api/v1/posts/1').then((res) => {
//     console.log(res.data)
// });


export default client;
