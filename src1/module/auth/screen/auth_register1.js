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
import { getDataaPhoneRegister } from '../unti/unti.js';


function Auth_register1({ navigation }) {


    const inputRef = useRef(null);

    // const getDataa = () => {
    //     if(inputRef.current.getData()){
    //         const data = inputRef.current.getData();
            
           

    //        // Submit(navigation, data);
           
    //     }
           
    //       if(inputRef.current.getData() == ""){
    //         console.log(5464564564)
    //          inputRef.current.showError("Vui lòng nhập số điện thoại")
    //       }
    
    // }
    // const [phone, setPhone] = useState('')
    // const [isValidPhone, setValidPhone] = useState(true)
    // const [errorMessage, setErrorMessage] = useState('')



    // const verifyPhoneNumber3 = (e) => {
    //     setPhone(e);
    //     if (!e) {
    //         setErrorMessage('Vui lòng nhập số điện thoại');
    //         setValidPhone(false);
    //         return;
    //     }

    //     let formData = {
    //         pphone: e
    //     }

    //     let regex = new RegExp(/^([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,13})$/)
    //     if (!regex.test(formData.pphone)) {
    //         setErrorMessage('Số điện thoại không hợp lệ');
    //         setValidPhone(false);

    //     } else {
    //         setValidPhone(true);
    //         setErrorMessage('');

    //     }
    // }




    const handleButtonClick = () => {
        Keyboard.dismiss();
    };

    // const submit = () => {
    //     console.log(phone)

    //     const showToast = () => {
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

    //     const showToast1 = () => {
    //         Toast.show({
    //             type: "error",
    //             text1: "Thông báo",
    //             text2: `${phoneeeee} Đã tồn tại`,
    //             autoHide: true,
    //             position: 'top',
    //             visibilityTime: 2500,
    //             topOffset: 0,

    //         })
    //     }



    //     const phoneee = `Không tồn tại số điện thoại ${phone}`
    //     const phoneeee = phoneee.slice(29)
    //     const phoneeeee = `+84${phoneeee}`






        //http://192.168.86.20:3000/api/v1/users/register
    //     if (isValidPhone && phone) {
    //         axios.post('https://ambio.vercel.app/api/v1/users/register', { "phoneNumber": phone })
    //             .then(res => {
    //                 navigation.navigate('Auth_register2', { tokenn: res.data.token, auth: phone })
    //                 console.log(res.data)
    //             }


    //             )
    //             .catch(function (error) {

    //                 if (error.response.data.errCode == 'AMBIO002') {
    //                     if (!phone) {
    //                         return null
    //                     } else {
    //                         showToast()
    //                     }


    //                 }
    //                 if (error.response.data.errCode == 'AMBIO003') {
    //                     showToast1()

    //                 }

    //             })
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
                    <Header textHeader="ĐĂNG KÝ" onBackPress={() => navigation.goBack()} />
                    <View style={styles.body}>
                        <Toast></Toast>
                        <View style={styles.logo}>
                        </View>
                        <View style={styles.register}>
                            <Text style={styles.TextInput}>Nhập số điện thoại của bạn sau đó tiếp tục</Text>
                            <TextInputLogin ref={inputRef} placeholder="Số điện thoại" Validate = {ValidatePhone} keyboardType="numeric"/>
                            <Text style={styles.rules}>Bạn bấm tiếp tục là đồng nghĩa với việc chấp nhận <Text style={{ textDecorationLine: 'underline', color: '#228B22' }} onPress={() => { navigation.navigate('auth_term') }}>điều khoản của chúng tôi</Text></Text>
                            <Button textButton="ĐĂNG KÝ" Submit={() => getDataaPhoneRegister(navigation, inputRef)} />

                        </View>



                        <View style={styles.footer}>
                            <Text style={styles.textFooterLeft} onPress={() => { navigation.navigate('auth_login1') }}>Đăng nhập</Text>
                            <Text style={styles.textFooterRight} onPress={() => { navigation.navigate('auth_forgotpassword1') }}>Quên mật khẩu</Text>

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

export default Auth_register1