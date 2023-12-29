import axios from "axios";
import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from 'react';
import { sendAPIRequestPost } from "../../../lib/sendApiRequest";


export const submitLogin1 = async (phone) => {

   const res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/verifyPhoneNumber', { "phoneNumber": phone }, 60000)
   return res

}





export const submitLogin2 = async (navigation, data, auth, deviceId, deviceName, deviceSystem) => {
    const res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/login', {
    "phoneNumber": auth,
    "passWord": data,
    "clientID": deviceId,
    "deviceName": deviceName,
    "operatingSystem": deviceSystem
  }, 60000)
    return res.data?.accessToken || res;
}





// export const getDataUserInfo = async (token) => {
//   try {

//     const response = await axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
//       "token": token
//     });
//     return response.data.phoneNumber;
//   } catch (error) {
//     return error.response.data
//   }

// }




export const submitRegister1 = async (phone) => {
  const res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/register', { "phoneNumber": phone }, 60000)
  return res
}






export const submitRegister2 = async (tokenn, phone, code) => {
 const res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/verifyCode', {
    "phoneNumber": phone,
    "code": Number.parseInt(code),
    "token": tokenn
  }, 60000)
  return res
}




export const submitRegister3 = async (phone, data, tokenn, tokenCFM, deviceId, deviceName, deviceSystem) => {
  const  res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/signUp', {
    "phoneNumber": phone,
    "passWord": data,
    "token": tokenn,
    "deviceTokenCFM": tokenCFM,
    "clientID": deviceId,
    "deviceName": deviceName,
    "operatingSystem": deviceSystem
  }, 60000)
   return res.data?.accessToken || res
}




export const submitForgotPassword1 = async (phone) => {
  const res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/forgotPassword', { "phoneNumber": phone }, 60000)
  return res
}




export const submitForgotPassword2 = async (tokenn, phone, code) => {
  const res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/verifyCode', {
    "phoneNumber": phone,
    "code": Number.parseInt(code),
    "token": tokenn
  }, 60000)
  return res
}




export const submitForgotPassword3 = async (phone, data, tokenn, deviceId, deviceName, deviceSystem) => {
  const res = await sendAPIRequestPost('https://ambio.vercel.app/api/v1/users/newPassword', {
    "phoneNumber": phone,
    "newPassWord": data,
    "clientID": deviceId,
    "deviceName": deviceName,
    "operatingSystem": deviceSystem,
    "token": tokenn
  }, 60000)
  return res.data?.accessToken || res
}
