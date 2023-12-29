
import { sendAPIRequestPost } from "../../../lib/sendapirequest";


export const getDataUserInfo = async (token) => {
    const body = {"token": token}
    
    return res = sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/getUserInfo', body, 60000)

}