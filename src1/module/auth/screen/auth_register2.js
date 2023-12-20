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
import { ValidateCode } from '../../../lib/validate.js';




function Auth_register2({ navigation, route }) {
    const inputRef = useRef(null);
    const getDataa = () => {
        if(inputRef.current.getData()){
            const data = inputRef.current.getData();
            
           

           // Submit(navigation, data);
           
        }
           
          if(inputRef.current.getData() == ""){
            console.log(5464564564)
             inputRef.current.showError("Vui lòng nhập mã xác nhận")
          }
    
    }
     

    // const [code, setCode] = useState('')
    // const [isValidPhone, setValidPhone] = useState(true)
    // const [errorMessage, setErrorMessage] = useState('')

    // const verifyPhoneNumber3 = (e) => {
    //     setCode(e);
    //     if (!e) {
    //         setErrorMessage('Vui lòng nhập mã xác nhận');
    //         setValidPhone(false);
    //         return;
    //     }

    //     let formData = {
    //         pphone: e
    //     }

    //     if (code) {
    //         setErrorMessage('');
    //         setValidPhone(true)

    //     }
    // }

    const handleButtonClick = () => {
        Keyboard.dismiss();
    };


    // const { tokenn } = route.params
    // const { auth } = route.params

    // const submit = () => {

    //     console.log(code)
    //     const showToast = () => {
    //         Toast.show({
    //             type: "error",
    //             text1: "Thông báo",
    //             text2: "Code không hợp lệ hoặc đã hết hạn",
    //             autoHide: true,
    //             position: 'top',
    //             visibilityTime: 2500,
    //             topOffset: 0,

    //         })
    //     }

    //     //http://192.168.86.20:3000/api/v1/users/verifyCode
    //     if(isValidPhone && code){
    //     axios.post('https://ambio.vercel.app/api/v1/users/verifyCode', { "phoneNumber": auth, "code": Number.parseInt(code), "token": tokenn })
    //         .then(res => {

    //             navigation.navigate('Auth_register3', { tokenn, auth })

    //         })

    //         .catch(function (error) {
    //             console.log(error.response.data)
    //             if (error.response.data.errCode == 'AMBIO002') {
    //                 showToast()
    //             }
    //         });
    //     }
    //     verifyPhoneNumber3(code);

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
        <StatusBar backgroundColor= '#00C853'/>
        <View style={styles.container}>
            <SafeAreaView edges={["left", "right", "top"]}
                style={{
                    flex: 1,
                    backgroundColor: "#00C853",
                    position: 'relative'
                }}>
                <Header textHeader="NHẬP MÃ XÁC NHẬN" onBackPress={() => navigation.goBack()} />
                <View style={styles.body}>
                    <Toast></Toast>
                    <View style={styles.logo}>
                    </View>
                    <View style={styles.register}>
                        <Text style={styles.TextInput}>Một mã xác nhận dùng để đăng ký đã được gửi đến số điện thoại: </Text>
                        <TextInputLogin ref={inputRef} placeholder="Nhập mã xác nhận" Validate = {ValidateCode} keyboardType="numeric"/>

                        <Button textButton="TIẾP TỤC" Submit={getDataa} />

                    </View>



                    <View style={styles.footer}>
                        <Text style={styles.textFooterLeft} onPress={() => { navigation.navigate('Auth_login1') }}>Đăng nhập</Text>
                        <Text style={styles.textFooterRight} onPress={() => { navigation.navigate('Auth_forgotpassword1') }}>Quên mật khẩu</Text>

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
        color: '#000',
        paddingHorizontal: 26,
        textAlign: 'center'
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

export default Auth_register2