import axios from "axios"
import App_manage from "../screen/app_manage"
import { screennavigation } from "../.."




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



export const getHistoryLogin = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }


    console.log(config, "token historylogin")
    try {
        const response = await axios.get('https://ambio.vercel.app/api/v1/users/historyLogin', config
        )
        return response.data.historyLogins;
        

    } catch (error) {
      
        return error.response.data.message;
    }

}




    

export const logOut = async (client, token, index, isThisDevice, historyLogins, navigation) => {


    try {
        const response = await  axios.delete('https://ambio.vercel.app/api/v1/users/logout', {
            data: client, headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        return response; 
      } catch (error) {
        console.error(error, "Error in Delete");
      
      }
}