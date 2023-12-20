import axios from "axios"
import App_manage from "../screen/app_manage"





export const getUserInfo= async (token) => {
    console.log(token)
    await axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
        "token": token
    })
        .then(res => {
         
            console.log(res.data.phoneNumber,111111111)
        })
        .catch(error => console.log(error))

        return res.data.phoneNumber

}