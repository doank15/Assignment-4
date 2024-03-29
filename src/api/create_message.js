import axios from 'axios';

const createMessage = {
    add: (data) => {
        const url = "http://127.0.0.1:3000/api/v1/messages"
        return axios.post(url, data)
    }, 
}
export default createMessage;