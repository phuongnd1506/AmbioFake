import React, { useState, useRef } from 'react';
import {
    Image,

    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,

    View,
    Fragment
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Button from '../../../uicore/button.js';
import Header from '../../../uicore/header.js';
import TextInputLogin from '../../../uicore/input.js';
import { ValidatePhone } from '../../../lib/validate.js';
import { getDataaPhoneForgotPassword } from '../unti/unti.js';


function Auth_forgotpassword1({ navigation }) {

    const inputRef = useRef(null);

    // const getDataa = () => {
    //     if(inputRef.current.getData()){
    //         const data = inputRef.current.getData();
            
           

    //         Submit(navigation, data);
           
    //     }
           
    //       if(inputRef.current.getData() == ""){
    //         console.log(5464564564)
    //          inputRef.current.showError("Vui lòng nhập số điện thoại")
    //       }
    
    // }
       


   


    // const submit = () => {
    //     console.log(phone)
    //     const showToast = () => {
    //         Toast.show({
    //             type: "error",
    //             text1: "Thông báo",
    //             text2: `Không tồn tại số điện thoại ${phoneeeee}`,
    //             autoHide: true,
    //             position: 'top',
    //             visibilityTime: 2500,
    //             topOffset: 0,

    //         })
    //     }

    //     const showToast1 = () => {
    //         Toast.show({
    //             type: "error",
    //             text1: "Thông báo",
    //             text2: `${phoneeeee} không phải là số điện thoại`,
    //             autoHide: true,
    //             position: 'top',
    //             visibilityTime: 2500,
    //             topOffset: 0,

    //         })
    //     }

    //     const phoneee = `Không tồn tại số điện thoại ${phone}`
    //     const phoneeee = phoneee.slice(29)
    //     const phoneeeee = `+84${phoneeee}`


    //     //http://192.168.86.20:3000/api/v1/users/forgotPassword
    //     if (isValidPhone && phone) {
    //         axios.post('https://ambio.vercel.app/api/v1/users/forgotPassword	', { "phoneNumber": phone })
    //             .then(res => {
    //                 navigation.navigate('Auth_forgotpassword2', { authh: phone, tokenn: res.data.token })
    //                 console.log(res.data)

    //             })
    //             .catch(function (error) {
    //                 console.log(error.response.data)
    //                 if (error.response.data.errCode == 'AMBIO004') {
    //                     showToast()
    //                 }
    //                 if (error.response.data.errCode == 'AMBIO002') {
    //                     showToast1()
    //                 }
    //             });
    //     }
    //     verifyPhoneNumber3(phone);

    //     if (!isValidPhone) {
    //         return;
    //     }
    // };

    // const submitAll = () => {
    //     handleButtonClick()
    //     submit()
    // }



    return (
        <>
            <StatusBar backgroundColor='#00C853' />
            <View style={styles.container}>
                <SafeAreaView edges={["left", "right", "top"]}
                    style={{
                        flex: 1,
                        backgroundColor: "#00C853",
                        position: 'relative'
                    }}>
                    <Header textHeader="QUÊN MẬT KHẨU" onBackPress={() => navigation.goBack()} />
                    <View style={styles.body}>
                        <Toast></Toast>
                        <View style={styles.logo}>
                        </View>
                        <View style={styles.register}>
                            <Text style={styles.TextInput}>Nhập số điện thoại của bạn để tiếp tục</Text>
                            <TextInputLogin ref={inputRef} placeholder="Số điện thoại" Validate = {ValidatePhone} keyboardType="numeric"/>

                            <Button textButton="QUÊN MẬT KHẨU" Submit={() => getDataaPhoneForgotPassword(navigation, inputRef)} />

                        </View>



                        <View style={styles.footer}>
                            <Text style={styles.textFooterLeft} onPress={() => { navigation.navigate('auth_login1') }}>Đăng nhập</Text>
                            <Text style={styles.textFooterRight} onPress={() => { navigation.navigate('auth_register1') }}>Đăng ký</Text>

                        </View>
                    </View>
                </SafeAreaView>
                <SafeAreaView edges={["bottom"]}
                    style={{ flex: 0, backgroundColor: "#ECEFF2" }} />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#00C853',

        // position: 'relative'

    },
    body: {
        flex: 1,

        borderTopRightRadius: 26,
        borderTopLeftRadius: 26,
        backgroundColor: '#ECEFF2',
        // position: 'absolute',
        // right: 0,
        // left: 0,
        // bottom: 0
    },

    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    register: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    TextInput: {
        marginBottom: 10,
        color: '#000'
    },
    rules: {
        width: 320,
        marginTop: 54,
        fontSize: 16,
        color: '#000'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',

        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 26
    },
    textFooterLeft: {
        marginBottom: 26,
        color: '#005920',
        fontSize: 16,
        fontWeight: '600'

    },
    textFooterRight: {
        marginBottom: 26,
        color: '#005920',
        fontSize: 16,
        fontWeight: '600'
    }

});

export default Auth_forgotpassword1