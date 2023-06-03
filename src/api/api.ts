import axios from "axios";

const baseUrl = process.env.ANIMAL_DAEJEON_API_URL + "/" ;
const accessKey = process.env.ANIMAL_DAEJEON_SERVICE_KEY ;

const response = axios.get(baseUrl, {
    params: {
        serviceKey : accessKey,
        numOfRows: 1,
        pageNo: 10
    }
});

export {response}