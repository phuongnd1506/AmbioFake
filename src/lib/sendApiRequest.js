import axios from "axios"
import { getToken } from "../module/app/screen/app_manage";



/**
 * Hàm này dùng Call API with method Post
 * @param {string} url
 * @param {object} body
 * @param {timeout} number
 * @returns {Promise}
 */

export const sendAPIRequestPost = async (url, body, timeout) => {
    console.log(timeout)
    try {
        const response = await axios.post(url, body, {timeout: timeout})
        return response
       
    } catch (error) {
        if (error.response?.data) {
            return error.response.data
        }
        if (error.code === 'ECONNABORTED') {
            return { errCode: "AMBIO504", message: "Đã hết thời gian chờ server phản hồi vui lòng thử lại sau" }
        }
        if(error.message === "Network Error") {
            return { errCode: "AMBIO505", message: "Kết nối mạng của bạn không ổn định, vui lòng kiểm tra lại" }
        }
        if (error?.response?.status != 200){
            return { errCode: "AMBIO506", message: "server hiện tại đang quá tải, vui lòng thử lại sau" }
        }
    }

}

/**
 * Hàm này dùng call API with method Get
 * @param {string} url
 * @param {number} timeout
 * @returns {Promise}
 */
export const sendAPIRequestGet = async (url, timeout) => {
    const token = await getToken()
    try {
        const response = await axios.get(
            url,
            {
                imeout: timeout,


                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }

        );
        return response.data.historyLogins;

    } catch (error) {
        if(error.response.data.message){
        return error.response.data.message;
        }
        if (error.code === 'ECONNABORTED') {
            return { errCode: "AMBIO504", message: "Đã hết thời gian chờ server phản hồi vui lòng thử lại sau" }
        }
        if(error.message === "Network Error") {
            return { errCode: "AMBIO505", message: "Kết nối mạng của bạn không ổn định, vui lòng kiểm tra lại" }
        }
        if (error?.response?.status != 200){
            return { errCode: "AMBIO506", message: "server hiện tại đang quá tải, vui lòng thử lại sau" }
        }
    }

}


/**
 * Hàm này dùng Call API with method Delete
 * @param {string} url
 * @param {object} client
 * @param {number} timeout
 * @returns {Promise}
 */
export const sendAPIRequestDelete = async (url, client, timeout) => {
    const token = await getToken()
    try {
        const response = await axios.delete(
            url,
            {
                timeout: timeout,
                data: client, headers: {
                    'Authorization': 'Bearer ' + token
                }
            }

        );
        return response;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            return { errCode: "AMBIO504", message: "Đã hết thời gian chờ server phản hồi vui lòng thử lại sau" }
        }
        if(error.message === "Network Error") {
            return { errCode: "AMBIO505", message: "Kết nối mạng của bạn không ổn định, vui lòng kiểm tra lại" }
        }
        if (error?.response?.status != 200){
            return { errCode: "AMBIO506", message: "server hiện tại đang quá tải, vui lòng thử lại sau" }
        }
    }
}




