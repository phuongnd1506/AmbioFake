import axios from "axios";
import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from 'react';


export const SubmitLogin1 = (navigation, phone) => {


    axios.post('https://ambio.vercel.app/api/v1/users/verifyPhoneNumber', {
        "phoneNumber": phone,

    }).then(res => {
        console.log(phone, 123123121111111)
        navigation.navigate('auth_login2', { auth: phone })

    })
        .catch(function (error) {
            console.log(error)

            if (error.response.data.errCode == "AMBIO002") {
                if (!phone) {
                    return null
                } else {
                    showToast()
                }

            }
            if (error.response.data.errCode == "AMBIO004") {
                showToast1()
            }
        });

}



export const SubmitLogin2 = (navigation, data, auth, deviceId, deviceName, deviceSystem) => {
    console.log(data, 123123333)
    console.log(auth, 15151515)
    
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('accessToken', value);

        } catch (e) {
            //error
        }
    };

    axios.post('https://ambio.vercel.app/api/v1/users/login', {
        "phoneNumber": auth,
        "passWord": data,
        "clientID": deviceId,
        "deviceName": deviceName,
        "operatingSystem": deviceSystem
    }).then(async res => {

        console.log(res.data)

        storeData(res.data.accessToken)
        navigation.navigate('app_manage')



    }
    )
        .catch(function (error) {
            console.log(error)
            if (error.response.data.errCode == "AMBIO002") {

                showToast();

            }
        });
}