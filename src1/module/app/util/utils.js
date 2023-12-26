import AsyncStorage from "@react-native-async-storage/async-storage";
import { logOut, getUserInfo, getHistoryLogin } from "./api";
import { setAppState } from "../..";
import { getToken } from "../screen/app_manage";




export const getDataUserInfo = async (setInfoUser) => {
      const token = await getToken()
      const res = await getUserInfo(token)
      if(res) {
        setInfoUser(res)
      }
}  




export const getDataHistorylogin = async (setHistoryLogins, setIsRefresh) => {
        const token = await getToken()
        const res = await getHistoryLogin(token)
        setIsRefresh(true)
        if (res) {
               
                setHistoryLogins(res)
                setIsRefresh(false)
        }
}



export const handleLogOut = async (index, isThisDevice, historyLogins, navigation, setHistoryLogins, setIsRefresh) => {
        const token = await getToken()
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



        const res = await logOut(client, token, index, isThisDevice, historyLogins, navigation, setHistoryLogins)


        getDataHistorylogin(token, setHistoryLogins, setIsRefresh);
        if (isThisDevice) {

                setAppState({ isLoading: false, isLogin: false })
        }

}




export const handleLogOutAll = async (historyLogins, navigation, setHistoryLogins) => {
        const token = await getToken()
        const client = historyLogins.map((e) => {
                return {
                        clientID: e.clientID
                }
        })

        client.forEach((item, i) => {

                item.isLogout = true;

        })


        const res = await logOut(client, token, historyLogins, navigation, setHistoryLogins)
        setAppState({ isLoading: false, isLogin: false })
}





export const getDataHistoryloginOnreFresh = async (setHistoryLogins, setIsRefresh) => {
        setIsRefresh(true)
        const token = await getToken()
       
        const res = await getHistoryLogin(token)
        if (res != "Invalid token") {
                setHistoryLogins(res)
                setIsRefresh(false)
        }
        if(res == "Invalid token"){
                setAppState({ isLoading: false, isLogin: false })
                setIsRefresh(false)
              
        }
       
       
}