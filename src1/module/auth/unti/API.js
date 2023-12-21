import axios from "axios";
import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from 'react';


export const SubmitLogin1 = async (phone) => {
        
    console.log(phone,99999999999)
   
    try {
        const response = await axios.post('https://ambio.vercel.app/api/v1/users/verifyPhoneNumber', {
            "phoneNumber": phone
        }); 
        return response; 
        
      } catch (error) {
        return error.response.data.errCode
      }


}








export const SubmitLogin2 = async (navigation, data, auth, deviceId, deviceName, deviceSystem) => {
    console.log(data, 123123333)
    console.log(auth, 15151515)
    
    try {
        const response = await axios.post('https://ambio.vercel.app/api/v1/users/login', {
            "phoneNumber": auth,
            "passWord": data,
            "clientID": deviceId,
            "deviceName": deviceName,
            "operatingSystem": deviceSystem
        });
        console.log(response.data.accessToken,66666666)
        return response.data.accessToken; 
       
      } catch (error) {
        return error.response.data.errCode;
        
      }
}






export const  SubmitRegister1 = async (phone) => {
    try {
        const response = await axios.post('https://ambio.vercel.app/api/v1/users/register', {
            "phoneNumber": phone
        }); 
        return response; 
        
      } catch (error) {
        return error.response.data.errCode
        
      }
}
     





export const SubmitRegister2 = async (tokenn, phone, code) => {

    try {
        const response = await  axios.post('https://ambio.vercel.app/api/v1/users/verifyCode', 
        { "phoneNumber": phone, "code": Number.parseInt(code), "token": tokenn })
        return response; 
       
      } catch (error) {
        console.log(error.response.data.errCode)
        return error.response.data.errCode
        
      }
}




export const SubmitRegister3 = async (phone, data, tokenn, tokenCFM, deviceId, deviceName, deviceSystem) => {
    try {
        const response = await  axios.post('https://ambio.vercel.app/api/v1/users/signUp', {
            "phoneNumber": phone,
            "passWord": data,
            "token": tokenn,
            "deviceTokenCFM": tokenCFM,
            "clientID": deviceId,
            "deviceName": deviceName,
            "operatingSystem": deviceSystem
        })
        return response.data.accessToken; 
       
      } catch (error) {
        console.error(error);
        
      }

}




export const  SubmitForgotPassword1 = async (phone) => {
    try {
        const response = await axios.post('https://ambio.vercel.app/api/v1/users/forgotPassword	', { "phoneNumber": phone })
        return response; 
   
      } catch (error) {
         return error.response.data.errCode;
        
      }
}



export const SubmitForgotPassword2 = async (tokenn, phone, code) => {

    try {
        const response = await  axios.post('https://ambio.vercel.app/api/v1/users/verifyCode', 
        { "phoneNumber": phone, "code": Number.parseInt(code), "token": tokenn })
        return response; 
       
      } catch (error) {
        return error.response.data.errCode;
        
      }
}




export const SubmitForgotPassword3 = async (phone, data, tokenn, deviceId, deviceName, deviceSystem) => {
    try {
        const response = await  axios.post('https://ambio.vercel.app/api/v1/users/newPassword', {
            "phoneNumber": phone,
            "newPassWord": data,
            "clientID": deviceId,
            "deviceName": deviceName,
            "operatingSystem": deviceSystem,
            "token": tokenn
        })
        return response.data.accessToken; 
       
      } catch (error) {
        console.error(error);
        
      }

}
