import React, { useEffect, useRef, useState } from 'react';
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
import TextInputLogin from '../../../uicore/input.js';
import { SubmitLogin1 } from '../unti/API.js';
import { ValidatePhone } from '../../../lib/validate.js';
import { GetDataaPhoneLogin } from '../unti/unti.js';
import { showToast } from '../../../uicore/toast.js';

function Auth_login1({ navigation }) {
    const inputRef = useRef(null);

    // const getDataa = () => {
    //     if(inputRef.current.getData()){
    //         const data = inputRef.current.getData();
                  
    //         SubmitLogin1(navigation, data);
           
    //     }
           
    //       if(inputRef.current.getData() == ""){
    //         console.log(5464564564)
    //          inputRef.current.showError("Vui lòng nhập số điện thoại")
    //       }
    
    // }
       
      

    // const handleButtonClick = () => {
    //     Keyboard.dismiss();
    // };

    


    // const showToast = () => {
    //     Toast.show({
    //         type: "error",
    //         text1: "Thông báo",
    //         text2: `${phoneeeee} không phải là số điện thoại`,
    //         autoHide: true,
    //         position: 'top',
    //         visibilityTime: 2500,
    //         topOffset: 0,

    //     })
    // }

    // const showToast1 = () => {
    //     Toast.show({
    //         type: "error",
    //         text1: "Thông báo",
    //         text2: "Số điện thoại chưa đăng ký, vui lòng đăng ký tài khoản mới",
    //         autoHide: true,
    //         position: 'top',
    //         visibilityTime: 2500,
    //         topOffset: 0,

    //     })
    // }


    // const phoneee = `Không tồn tại số điện thoại ${phone}`
    // const phoneeee = phoneee.slice(29)
    // const phoneeeee = `+84${phoneeee}`



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
                    <View style={styles.Header}></View>
                    <View style={styles.body}>
                        <Toast></Toast>
                        <View style={styles.logo}>
                            <Image source={require('../../../asset/ambio_1628393628-removebg-preview.png')}
                                style={{ width: 200, height: 200 }}

                            />

                        </View>
                        <View style={styles.login}>
                            <Text style={styles.TextInput}>Nhập số điện thoại của bạn để đăng nhập</Text>
                            <TextInputLogin ref={inputRef} placeholder="Số điện thoại" Validate = {ValidatePhone} keyboardType="numeric"/>
                            <Button textButton="TIẾP TỤC" Submit={() => GetDataaPhoneLogin(navigation, inputRef)} />
                        </View>



                        <View style={styles.footer}>
                            <Text style={styles.textFooterRegister} onPress={() => { navigation.navigate('auth_register1') }}>ĐĂNG KÝ TÀI KHOẢN</Text>
                            <Text style={styles.textForgotPassword} onPress={() => { navigation.navigate('auth_forgotpassword1') }}>Quên mật khẩu</Text>
                            <Text style={styles.textVersion}>Phiên bản: 2.0.1.60 beta</Text>
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
    Header: {
        height: 28,
        backgroundColor: '#00C853',
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    TextInput: {
        marginBottom: 10,
        color: '#000'
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFooterRegister: {
        fontSize: 20,
        marginTop: 26,
        fontWeight: '600',
        color: '#005920'
    },
    textForgotPassword: {
        fontSize: 18,
        marginTop: 32,
        fontWeight: '600',
        color: '#005920'

    },
    textVersion: {
        position: 'absolute',
        bottom: 0
    },

});

export default Auth_login1