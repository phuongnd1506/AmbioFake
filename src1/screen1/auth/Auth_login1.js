import React, { useState } from 'react';
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
import Button from '../../component1/Button';
import { TextInputLogin } from '../../component1/Input';



function Auth_login1({ navigation }) {

    const [isValidPhone, setValidPhone] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [phone, setPhone] = useState('')



    const verifyPhoneNumber3 = (e) => {
        setPhone(e);
        if (!e) {
            setErrorMessage('Vui lòng nhập số điện thoại');
            setValidPhone(false);

            return;
        }

        let formData = {
            pphone: e
        }

        let regex = new RegExp(/^([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,13})$/)
        if (!regex.test(formData.pphone)) {
            setErrorMessage('Số điện thoại không hợp lệ');
            setValidPhone(false);

        } else {
            setValidPhone(true);
            setErrorMessage('');


        }

    }



    const handleButtonClick = () => {
        Keyboard.dismiss();
    };

    const submit = () => {
        console.log(phone)
        if (isValidPhone && phone) {
            axios.post('https://ambio.vercel.app/api/v1/users/verifyPhoneNumber', {
                "phoneNumber": phone,

            }).then(res => {

                navigation.navigate('Auth_login2', { auth: phone })

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

        verifyPhoneNumber3(phone);

        if (!isValidPhone) {
          return;
        }
    
    }

    const submitAll = () => {
        handleButtonClick()
        submit()
    }


    const showToast = () => {
        Toast.show({
            type: "error",
            text1: "Thông báo",
            text2: `${phoneeeee} không phải là số điện thoại`,
            autoHide: true,
            position: 'top',
            visibilityTime: 2500,
            topOffset: 0,

        })
    }

    const showToast1 = () => {
        Toast.show({
            type: "error",
            text1: "Thông báo",
            text2: "Số điện thoại chưa đăng ký, vui lòng đăng ký tài khoản mới",
            autoHide: true,
            position: 'top',
            visibilityTime: 2500,
            topOffset: 0,

        })
    }


    const phoneee = `Không tồn tại số điện thoại ${phone}`
    const phoneeee = phoneee.slice(29)
    const phoneeeee = `+84${phoneeee}`



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
                        <TextInputLogin validate={verifyPhoneNumber3} isValidPhonee={isValidPhone} errorM={errorMessage} phone={phone} />
                        <Button textButton="TIẾP TỤC" Submit={submitAll} />
                    </View>



                    <View style={styles.footer}>
                        <Text style={styles.textFooterRegister} onPress={() => { navigation.navigate('Auth_register1') }}>ĐĂNG KÝ TÀI KHOẢN</Text>
                        <Text style={styles.textForgotPassword} onPress={() => { navigation.navigate('Auth_forgotpassword1') }}>Quên mật khẩu</Text>
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