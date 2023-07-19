// axios 요청이 들어가는 모듈
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

//! GET
const getLists = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/post`
        );
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

//! POST
const postLists = async (newLists) => {
    console.log('postLists');
    const formData = new FormData();
    const payload = {
        title: newLists.title,
        contents: newLists.contents,
    };
    console.log('payload: ', payload);
    console.log(newLists.files);
    formData.append(
        'requestDto',
        new Blob([JSON.stringify(payload)], { type: 'application/json' })
    );
    // image가 없으면 보내지 않음!(빈객체, 더미 파일도 x)
    if (newLists.files) {
        formData.append('image', newLists.files);
    }

    // image 첨부
    // if (payload.files) {
    //     for (let i = 0; i < payload.files.length; i++) {
    //         formData.append('image', payload.files[i]);
    //     }
    // } else {
    //     formData.append('image', new File([], 'default.jpg'));
    // }

    // json 변환용 이미지를 제외한 나머지를 json으로 보낸다.
    // let jsonObject = {};
    // for (const [key, value] of formData.entries()) {
    //     jsonObject[key] = value;
    // }
    // new Blob([JSON.stringify(jsonObject)], { type: "application/json" })

    const authorizationCookie = localStorage.getItem('authorization');

    console.log(authorizationCookie);
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/post`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: authorizationCookie,
            },
        }
    );
    console.log(response);
    return response.data;
};

//! Sign In
const onSignAPI = async (event) => {
    try {
        const payload = {
            // username: userId,
            username: event.username,
            password: event.password,
        };
        console.log('signin: ', payload);
        // const res = await instance.post('api/user/signup', payload);
        const res = await instance.post('/api/auth/signup', payload);
        return res;
    } catch (error) {
        console.log(error);
    }
};

//! Get Cookie
function getCookie(cookieName) {
    var cookieValue = null;
    if (document.cookie) {
        var array = document.cookie.split(escape(cookieName) + '=');
        if (array.length >= 2) {
            var arraySub = array[1].split(';');
            cookieValue = unescape(arraySub[0]);
        }
    }
    return cookieValue;
}

//! Login
const onLoginAPI = async (event) => {
    try {
        const payload = {
            // key: value,
            // title : "title"
            username: event.username,
            password: event.password,
        };
        console.log('Login: ', payload);
        const res = await instance.post('api/auth/login', payload, {
            // headers: headers,
        });

        localStorage.setItem('authorization', res.headers.authorization);
        // 쿠키 저장하는 법
        // document.cookie = `{cookieName}={cookieValue} path=/`;

        // // 쿠키 가져오는 거
        // getCooke("authorization");
        // const authorizationCookie = getCookie('authorization');

        // console.log(authorizationCookie);
        // const headers = {
        //     // "headerName" : "headerValue"
        //     authorization: authorizationCookie,
        // };
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

const getComment = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/post/${id}`
        );
        // console.log('response.data : ', response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

const postComment = async (payload) => {
    // payload.preventDefault();
    try {
        const { post_id, contents } = payload;
        console.log(payload);
        const authorizationCookie = localStorage.getItem('authorization');
        // const accessToken = getCookie('accessToken');
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/post/${post_id}/comment`,
            { contents },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: '*/*',
                    Authorization: authorizationCookie,
                    // Authorization: `${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export {
    getLists,
    postLists,
    getComment,
    postComment,
    onLoginAPI,
    onSignAPI,
    getCookie,
};
