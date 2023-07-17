// axios 요청이 들어가는 모듈
import axios from 'axios';

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

const postLists = async (newLists) => {
    const formData = new FormData();
    formData.append('title', newLists.title);
    formData.append('contents', newLists.contents);
    formData.append('username', newLists.username);
    formData.append('password', newLists.password);

    // image가 없으면 보내지 않음!(빈객체, 더미 파일도 x)
    if (newLists.files) {
        for (let i = 0; i < newLists.files.length; i++) {
            formData.append('image', newLists.files[i]);
        }
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

    // // json 변환용
    // let jsonObject = {};
    // for (const [key, value] of formData.entries()) {
    //     jsonObject[key] = value;
    // }
    // formData.append('json', JSON.stringify(jsonObject));

    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/post`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    );
    console.log(response);
    return response.data;
};

const getComment = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/post`
        );
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

const postComment = async () => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/post`
        );
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export { getLists, postLists, getComment, postComment };
