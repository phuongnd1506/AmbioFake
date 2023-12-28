import AsyncStorage from "@react-native-async-storage/async-storage";
import { logOut, getUserInfo, getHistoryLogin } from "./api";
import { setAppState } from "../..";
import { getToken } from "../screen/app_manage";






export const getDataHistorylogin = async (setHistoryLogins, setIsRefresh) => {
        setIsRefresh(true)
       
        const res = await getHistoryLogin()
       
        if (res) {
               
                setHistoryLogins(res)
                setIsRefresh(false)
        }
}



export const handleLogOut = async (index, isThisDevice, historyLogins, navigation, setHistoryLogins, setIsRefresh) => {
        const client = historyLogins.map((e) => {
                return {
                        clientID: e.clientID,
                        isLogout: index === e.clientID
                }
        })

        const res = await logOut(client, index, isThisDevice, historyLogins, navigation, setHistoryLogins)
        
        if (isThisDevice) {

                setAppState({ isLoading: false, isLogin: false })
        }else{
                getDataHistorylogin(token, setHistoryLogins, setIsRefresh);
        }

}




export const handleLogOutAll = async (historyLogins, navigation, setHistoryLogins) => {
      
        const client = historyLogins.map((e) => {
                return {
                        clientID: e.clientID,
                        isLogout: true
                }
        })


        const res = await logOut(client, historyLogins, navigation, setHistoryLogins)
        setAppState({ isLoading: false, isLogin: false })
}





export const getDataHistoryloginOnreFresh = async (setHistoryLogins, setIsRefresh) => {
        setIsRefresh(true)
     
       
        const res = await getHistoryLogin()
        if (res != "Invalid token") {
                setHistoryLogins(res)
                setIsRefresh(false)
        }
        if(res == "Invalid token"){
                setAppState({ isLoading: false, isLogin: false })
                setIsRefresh(false)
              
        }
       
       
}