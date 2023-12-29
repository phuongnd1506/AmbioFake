import axios from "axios"
import App_manage from "../screen/app_manage"
import { screennavigation } from "../.."
import { sendAPIRequestGet, sendAPIRequestDelete } from "../../../lib/sendApiRequest"



export const getUserInfo = async (token) => {
    console.log(token)
    try {
        const response = await axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
            "token": token
        });
        return response.data.phoneNumber;
    } catch (error) {
       return "";
    }
   

}



export const getHistoryLogin = async () => {
     return res = await sendAPIRequestGet('https://ambio.vercel.app/api/v1/users/historyLogin', 60000)
}




    

export const logOut = async (client, index, isThisDevice, historyLogins, navigation) => {
       return res = await sendAPIRequestDelete('https://ambio.vercel.app/api/v1/users/logout', client, 60000)
}