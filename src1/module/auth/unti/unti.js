

import { SubmitForgotPassword1, SubmitForgotPassword2, SubmitForgotPassword3, SubmitLogin1, SubmitLogin2, SubmitRegister1, SubmitRegister2, SubmitRegister3 } from "./API";
import { useRef } from "react";
import { screennavigation } from "../..";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import DeviceInfo from "react-native-device-info";
import { showToast } from "../../../uicore/toast";
import { ValidatePhone, ValidatePassword, ValidateCode, ValidateCreatePassword } from "../../../lib/validate";
import messaging from '@react-native-firebase/messaging';

export const GetDataaPhoneLogin = async (navigation, inputRef) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();
     
        const res = await SubmitLogin1(data);

        if (!ValidatePhone(data)) {
            if (res == "AMBIO002") {

                showToast(data, "Không phải là số điện thoại")
            }
            if (res == "AMBIO004") {
                showToast("", "Số điện thoại chưa đăng ký, vui lòng đăng ký tài khoản mới")
            }
            if (res != "AMBIO002" && res != "AMBIO004") {
                navigation.navigate('auth_login2', { auth: data })
            }
        }

    }

    if (inputRef.current.getData() == "") {

        inputRef.current.showError("Vui lòng nhập số điện thoại")
    }

}




export const getDataaPasswordLogin = async (inputRef, navigation, auth, deviceId, deviceName, deviceSystem) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

    const storeData = async (res) => {
        try {
            await AsyncStorage.setItem('accessToken', res);
            console.log(res, "tokennnnnnnnnnnnnfffffffff")
        } catch (e) {
            //error
        }
    };
    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();
        console.log(data, 35435344635435)

        const res = await SubmitLogin2(navigation, data, auth, deviceId, deviceName, deviceSystem);
        if (!ValidatePassword(data)) {
            if (res != "AMBIO002") {

                storeData(res)
                screennavigation({ isLoading: false, isLogin: true })
            }
            if (res == "AMBIO002") {
                showToast("Số điện thoại hoặc mật khẩu không đúng, vui lòng thử lại sau")
            }
        }

    }
   
        inputRef.current.showEye(true)
        inputRef.current.showPass(true)
    
    if (inputRef.current.getData() == "") {

        inputRef.current.showError("Vui lòng nhập mật khẩu")
    }

}




export const getDataaPhoneRegister = async (navigation, inputRef) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();


        const res = await SubmitRegister1(data)
        if (!ValidatePhone(data)) {
            if (res == "AMBIO002") {

                showToast(data, "Không phải là số điện thoại")
            }
            if (res == "AMBIO003") {
                showToast(data, "Đã tồn tại")
            }
            if (res != "AMBIO002" && res != "AMBIO003") {
                navigation.navigate('auth_register2', { tokenn: res.data.token, phone: data })
                console.log(res.data)
            }
        }


    }

    if (inputRef.current.getData() == "") {
        console.log(5464564564)
        inputRef.current.showError("Vui lòng nhập số điện thoại")
    }

}




export const getDataaCodeRegister = async (tokenn, phone, inputRef, navigation) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();

        console.log(tokenn, 12312323)
        const res = await SubmitRegister2(tokenn, phone, data)
        if (!ValidateCode(data)) {
            if (res == "AMBIO002") {
                showToast("", "Code không hợp lệ hoặc đã hết hạn")
            }
            if (res != "AMBIO002") {
                navigation.navigate('auth_register3', { tokenn, phone })
            }
        }

    }

    if (inputRef.current.getData() == "") {
        console.log(5464564564)
        inputRef.current.showError("Vui lòng nhập mã xác nhận")
    }

}



export const getDataaPasswordRegister = async (phone, tokenn, inputRef) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

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
    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();


        const res = await SubmitRegister3(phone, data, tokenn, tokenCFM, uniqueId, deviceName, deviceSystem);
        if (!ValidateCreatePassword(data)) {
            if (res) {

                storeData(res)
                screennavigation({ isLoading: false, isLogin: true })
            }
        }
    }

    
        inputRef.current.showEye(true)
        inputRef.current.showPass(true)
    


    if (inputRef.current.getData() == "") {
        console.log(5464564564)
        inputRef.current.showError("Vui lòng nhập mật khẩu")

    }
}





export const getDataaPhoneForgotPassword = async (navigation, inputRef) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();

        const res = await SubmitForgotPassword1(data)
        if (!ValidatePhone(data)) {
            if (res == "AMBIO004") {
                showToast("Không tồn tại số điện thoại", data)
            }
            if (res == "AMBIO002") {
                showToast(data, "Không phải là số điện thoại")
            }
            if (res != "AMBIO004" && res != "AMBIO002") {
                console.log(res.data)
                navigation.navigate('auth_forgotpassword2', { tokenn: res.data.token, phone: data })
            }
        }


    }

    if (inputRef.current.getData() == "") {
        console.log(5464564564)
        inputRef.current.showError("Vui lòng nhập số điện thoại")
    }

}



export const getDataaCodeForgotPassword = async (tokenn, phone, inputRef, navigation) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();

        const res = await SubmitForgotPassword2(tokenn, phone, data)

        if (!ValidateCode(data)) {
            if (res == "AMBIO002") {
                showToast("", "Code không hợp lệ hoặc đã hết hạn")
            }
            if (res != "AMBIO002") {
                navigation.navigate('auth_forgotpassword3', { tokenn, phone })
            }
        }

    }

    if (inputRef.current.getData() == "") {
        console.log(5464564564)
        inputRef.current.showError("Vui lòng nhập mã xác nhận")
    }

}




export const getDataaPasswordForgotPassword = async (phone, tokenn, inputRef) => {
    const handleButtonClick = () => {
        Keyboard.dismiss();
    };
    handleButtonClick()

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
    if (inputRef.current.getData()) {
        const data = inputRef.current.getData();
        console.log(data, 35435344635435)

        const res = await SubmitForgotPassword3(phone, data, tokenn, uniqueId, deviceName, deviceSystem);
        if (!ValidateCreatePassword(data)) {
            if (res) {
                storeData(res)
                screennavigation({ isLoading: false, isLogin: true })
            }
        }
    }

    
 
        inputRef.current.showEye(true)
        inputRef.current.showPass(true)
    

    if (inputRef.current.getData() == "") {
        console.log(5464564564)
        inputRef.current.showError("Vui lòng nhập mật khẩu")

    }
}
