

import { submitForgotPassword1, submitForgotPassword2, submitForgotPassword3, submitLogin1, submitLogin2, submitRegister1, submitRegister2, submitRegister3, getDataUserInfo } from "./api";
import { useRef } from "react";
import { setAppState } from "../..";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from "react-native-device-info";
import { showToast } from "../../../uicore/toast";
import { validatePhone, validatePassword, validateCode, validateCreatePassword } from "../../../lib/validate";
import messaging from '@react-native-firebase/messaging';
import { getToken } from "../../app/screen/app_manage";
import { getUserInfoNumber } from "../../loading/util/utils";
import { loadingButton } from "../../../uicore/button";



/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputPhoneLogin
 * @param {{}} inputRef
 * 
 */
export const handlePhoneLogin = async (navigation, inputRef) => {
    const phone = inputRef.current.getData()
    if (phone) {
        loadingButton(true)
       
        const res = await submitLogin1(phone);
        if (res.errCode == "AMBIO002" || res.errCode == "AMBIO004") {
            showToast(`${res.message}`)
            loadingButton(false)
        } else {
            await loadingButton(false)
            navigation.navigate('auth_login2', { auth: phone })
          
        }
    }
}








async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}





/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputPasswordLogin
 * @param {object} inputRef
 * @param {number} auth
 */

export const handlePasswordLogin = async (inputRef, navigation, auth) => {
    var uniqueId = await DeviceInfo.getUniqueId();
    var deviceName = await DeviceInfo.getDeviceName();
    var deviceSystem = await DeviceInfo.getSystemName();
    const storeData = async (res) => {
        try {
            await AsyncStorage.setItem('accessToken', res);
        } catch (e) {
            //error
        }
    };

    const password = inputRef.current.getData()
    if (password) {
        loadingButton(true)
        const res = await submitLogin2(navigation, password, auth, uniqueId, deviceName, deviceSystem);
        if (res.errCode == "AMBIO002") {
            loadingButton(false)
            showToast(`${res.message}`)
        } else {
            loadingButton(false)
            await storeData(res)

            await getUserInfoNumber()
            setAppState({ isLoading: false, isLogin: true })
         
            requestUserPermission()

            //getTokenCFM
            //call api day token CFM len server
        }
    }

}





/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputPhoneRegister
 * @param {object} inputRef
 */
export const handlePhoneRegister = async (navigation, inputRef) => {
    const phone = inputRef.current.getData()
    if (phone) {
        loadingButton(true)
        const res = await submitRegister1(phone)
        if (res.errCode == "AMBIO003" || res.errCode == "AMBIO002") {
            loadingButton(false)
            showToast(`${res.message}`)
        } else {
            loadingButton(false)
            console.log(res.data)
            navigation.navigate('auth_register2', { tokenn: res.data.token, phone: phone })

        }
    }

}




/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputCodeRegister
 * @param {{}} inputRef
 * @param {string} tokenn
 * @param {number} phone
 */
export const handleCodeRegister = async (tokenn, phone, inputRef, navigation) => {
    const code = inputRef.current.getData()
    if (code) {
        loadingButton(true)
        const res = await submitRegister2(tokenn, phone, code)
        if (res.errCode == "AMBIO002") {
            showToast(`${res.message}`)
        } else {
            console.log(res.data)
            navigation.navigate('auth_register3', { tokenn, phone })
        }
    }

}




/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputPasswordRegister
 * @param {object} inputRef
 * @param {string} tokenn
 * @param {number} phone
 */
export const handlePasswordRegister = async (phone, tokenn, inputRef) => {
    var uniqueId = await DeviceInfo.getUniqueId();
    var deviceName = await DeviceInfo.getDeviceName();
    var deviceSystem = await DeviceInfo.getSystemName();
    const tokenCFM = await messaging().getToken();
    console.log(tokenCFM, "CFMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")


    const storeData = async (res) => {
        try {
            await AsyncStorage.setItem('accessToken', res);

        } catch (e) {
            //error
        }
    };
    const createPassword = inputRef.current.getData()
 
    if (createPassword) {
        loadingButton(true)
        const res = await submitRegister3(phone, createPassword, tokenn, tokenCFM, uniqueId, deviceName, deviceSystem);

        if (res) {
            loadingButton(false)
            await getUserInfoNumber()

            storeData(res)
            setAppState({ isLoading: false, isLogin: true })

            requestUserPermission()

            //getTokenCFM
            //call api day token CFM len server

        }

    }

}





/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputPhoneForgotPassword
 * @param {object} inputRef
 */
export const handlePhoneForgotPassword = async (navigation, inputRef) => {
    const phone = inputRef.current.getData()
   
    if (phone) {
        loadingButton(true)
        const res = await submitForgotPassword1(phone)

        if (res.errCode == "AMBIO004" || res.errCode == "AMBIO002") {
            loadingButton(false)
            showToast(`${res.message}`)
        } else {
            loadingButton(false)
            console.log(res.data)
            navigation.navigate('auth_forgotpassword2', { tokenn: res.data.token, phone: phone })

        }


    }

}



/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputCodeForgotPassword
 * @param {object} inputRef
 * @param {string} tokenn
 * @param {number} phone
 */
export const handleCodeForgotPassword = async (tokenn, phone, inputRef, navigation) => {
    const code = inputRef.current.getData()

    if (code) {
        loadingButton(true)
        const res = await submitForgotPassword2(tokenn, phone, code)

        if (res.errCode == "AMBIO002") {
            loadingButton(false)
            showToast(`${res.message}`)
        } else {
            loadingButton(false)
            navigation.navigate('auth_forgotpassword3', { tokenn, phone })
        }


    }

}



/**
 * Hàm này dùng để xử lý dữ liệu trả về từ TextInputPasswordForgotPassword
 * @param {object} inputRef
 * @param {string} tokenn
 * @param {number} phone
 */
export const handlePasswordForgotPassword = async (phone, tokenn, inputRef) => {
    var uniqueId = await DeviceInfo.getUniqueId();
    var deviceName = await DeviceInfo.getDeviceName();
    var deviceSystem = await DeviceInfo.getSystemName();

    const storeData = async (res) => {
        try {
            await AsyncStorage.setItem('accessToken', res);

        } catch (e) {
            //error
        }
    };
    const createPassword = inputRef.current.getData()
  
    if (createPassword) {
        loadingButton(true)
        const res = await submitForgotPassword3(phone, createPassword, tokenn, uniqueId, deviceName, deviceSystem);

        if (res) {
            loadingButton(false)
            await getUserInfoNumber()

            storeData(res)
            setAppState({ isLoading: false, isLogin: true })

            requestUserPermission()

            //getTokenCFM
            //call api day token CFM len server

        }

    }

}
