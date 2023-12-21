import Index from "../..";
import { screennavigation } from "../..";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export const indexx = async () => {


    try {
        const value = await AsyncStorage.getItem('accessToken');
        if (value !== null) {
                await  axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
                "token": value
            })
                .then(res => {
                       screennavigation({isLoading: false, isLogin: true})
                })
                .catch(error => screennavigation({isLoading: false, isLogin: false}))
            


        }
       
    } catch (e) {
    }
}





