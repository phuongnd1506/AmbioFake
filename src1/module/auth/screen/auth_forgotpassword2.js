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
import { getDataaCodeForgotPassword } from '../unti/unti.js';



function Auth_forgotpassword2({ navigation, route }) {
    const inputRef = useRef(null);
    const {tokenn} = route.params
    const {phone} = route.params

    // const getDataa = () => {
    //     if(inputRef.current.getData()){
    //         const data = inputRef.current.getData();
            
           

    //        // Submit(navigation, data);
           
    //     }
           
    //       if(inputRef.current.getData() == ""){
    //         console.log(5464564564)
    //          inputRef.current.showError("Vui lòng nhập mã xác nhận")
    //       }
    
    // }


    



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


    // const handleButtonClick = () => {
    //     Keyboard.dismiss();
    // };


    // const { authh } = route.params
    // const { tokenn } = route.params

    // const submit = () => {


    //     console.log(authh)
    //     console.log(code);
    //     console.log(tokenn)

    //     //http://192.168.86.20:3000/api/v1/users/verifyCode
    //     if (isValidPhone && code) {
    //         axios.post('https://ambio.vercel.app/api/v1/users/verifyCode', { "phoneNumber": authh, "code": Number.parseInt(code), "token": tokenn })
    //             .then(res => {
    //                 console.log(res.data)
    //                 navigation.navigate('Auth_forgotpassword3', { authh, tokenn })
    //             })
    //             .catch(error => console.log(error.response.data))

    //             ;
    //     }
    //     verifyPhoneNumber3(code);

    //     if (!isValidPhone) {
    //         return;
    //     }
    // }




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
                    <Header textHeader="NHẬP MÃ XÁC NHẬN" onBackPress={() => navigation.goBack()} />
                    <View style={styles.body}>
                        <Toast></Toast>
                        <View style={styles.logo}>
                        </View>
                        <View style={styles.register}>
                            <Text style={styles.TextInput}>Mã xác nhận sẽ được gửi số điện thoại {phone} , vui lòng kiểm tra và nhận mã xác nhận để tiếp tục</Text>
                            <TextInputLogin ref={inputRef} placeholder="Nhập mã xác nhận" Validate = {ValidateCode} keyboardType="numeric"/>

                            <Button textButton="XÁC NHẬN" Submit={() => getDataaCodeForgotPassword(tokenn, phone, inputRef, navigation)} />

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

export default Auth_forgotpassword2