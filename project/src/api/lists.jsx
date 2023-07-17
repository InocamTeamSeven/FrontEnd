// axios 요청이 들어가는 모듈
import axios from 'axios';

const getLists = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/lists`
    );
    console.log(response);
    return response;
};

export { getLists };
