import axios from "axios";



export const getDataUserInfo = async (token) => {
    try {

        const response = await axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
            "token": token
        });
        
        return response;

    } catch (error) {

        return error.response.data
    }

}