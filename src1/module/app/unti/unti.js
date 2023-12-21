import AsyncStorage from "@react-native-async-storage/async-storage";
import { Logout, getUserInfo } from "./API";
import { getHistoryLogin } from "./API";
import { screennavigation } from "../..";


export const getToken = async () => {

        const value = await AsyncStorage.getItem('accessToken');

        return value


};



export const getdataUserInfo = async (token, setInfoUser) => {
      const res = await getUserInfo(token)
      if(res) {
        setInfoUser(res)
      }
}  




export const getdataHistorylogin = async (token, setHistoryLogins, setIsRefresh) => {
        console.log(token, 1111111112222223)
        const res = await getHistoryLogin(token)
        if (res) {
                setHistoryLogins(res)
        }
        setIsRefresh(true)
        setTimeout(() => {
                setIsRefresh(false)
        }, 1000)
}



export const Logoutt = async (token, index, isThisDevice, historyLogins, navigation, setHistoryLogins) => {
        const client = historyLogins.map((e) => {
                return {
                        clientID: e.clientID
                }
        })

        client.forEach((item, i) => {

                if (index == item.clientID) {

                        item.isLogout = true;

                } else {
                        item.isLogout = false
                }
        })



        const res = await Logout(client, token, index, isThisDevice, historyLogins, navigation, setHistoryLogins)


        getdataHistorylogin(token, setHistoryLogins);
        if (isThisDevice) {

                screennavigation({ isLoading: false, isLogin: false })
        }

}




export const LogouttAll = async (token, historyLogins, navigation, setHistoryLogins) => {
        const client = historyLogins.map((e) => {
                return {
                        clientID: e.clientID
                }
        })

        client.forEach((item, i) => {

                item.isLogout = true;

        })


        const res = await Logout(client, token, historyLogins, navigation, setHistoryLogins)
        screennavigation({ isLoading: false, isLogin: false })
}






export const onRefresh = async (setIsRefresh) => {

        const value = await AsyncStorage.getItem('accessToken');
        const response = await getUserInfo(value)
        if (!response) {
             console.log(response,12313221111111)
                screennavigation({ isLoading: false, isLogin: false })
        }

        setIsRefresh(true)
        setTimeout(() => { setIsRefresh(false) }, 1200)
}



export const getdataHistoryloginOnreFresh = async (setHistoryLogins, setIsRefresh) => {
        const value = await AsyncStorage.getItem('accessToken');
        console.log(value, 11111111)
        const res = await getHistoryLogin(value)
        if (res) {
                setHistoryLogins(res)
        }
        setIsRefresh(true)
        setTimeout(() => { setIsRefresh(false) }, 1200)
}