
import { setAppState } from "../..";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getDataUserInfo } from "./api";

export let numberPhone = ""


export const getUserInfoNumber = async() => {
    const token = await AsyncStorage.getItem('accessToken');
    const res = await getDataUserInfo(token)
    return numberPhone = res.data.phoneNumber
}

export const handleScreen = async () => {

    try {
        const token = await AsyncStorage.getItem('accessToken');

        const res = await getDataUserInfo(token)
      

        if (res.message == "Invalid token") {
      
            setAppState({ isLoading: false, isLogin: false })
        } else {

            numberPhone =  res.data.phoneNumber
            console.log(numberPhone,"phoneeeeeeeee")
            setAppState({ isLoading: false, isLogin: true })
            
            //getTokenCFM
            //call api day tokenCFM len server

        }


    } catch (e) {
    }
}
