import axios from "axios"
import { getToken } from "../module/app/screen/app_manage";



/**
 * Hàm này dùng Call API with method Post
 * @param {string} url
 * @param {object} body
 * @returns {string}
 */
export const sendAPIRequestPost = async (url, body) => {

    try {
        const response = await axios({
            method: 'post', url: url, data: body
        });
        return response;

    } catch (error) {
        return error.response.data
    }


}



/**
 * Hàm này dùng call API with method Get
 * @param {string} url
 * @returns {string}
 */
export const sendAPIRequestGet = async (url) => {
    const token = await getToken()
    try {
        const response = await axios({
            method: 'get', url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }

        });
        return response.data.historyLogins;

    } catch (error) {
        return error.response.data.message;
    }

}


/**
 * Hàm này dùng Call API with method Delete
 * @param {string} url
 * @param {object} client
 * @returns {string}
 */
export const sendAPIRequestDelete = async (url, client) => {
    const token = await getToken()
    try {
        const response = await axios({
            method: 'delete', url: url,
            data: client, headers: {
                'Authorization': 'Bearer ' + token
            }

        });
        return response;
    } catch (error) {
    }
}




