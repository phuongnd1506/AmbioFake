import React, { useEffect, useState, useRef } from 'react';
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
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ValidateCreatePassword } from '../../../lib/validate.js';



function Auth_forgotpassword3({ navigation, route }) {

    const inputRef = useRef(null);
  
   
    const getDataa = () => {
        if (inputRef.current.getData()) {
            const data = inputRef.current.getData();
            console.log(data, 35435344635435)

            // Submit(navigation, data);

        }

        if (inputRef.current.getData() == "") {
            console.log(5464564564)
            inputRef.current.showError("Vui lòng nhập mật khẩu")
           
        }

    }

    useEffect(() => {
        inputRef.current.showEye(true)
        inputRef.current.showPass(true)
    })

    // const [newPassword, setNewPassword] = useState('')
    // const [isValidPhone, setValidPhone] = useState(true)
    // const [errorMessage, setErrorMessage] = useState('')

    // const verifyPhoneNumber3 = (e) => {
    //     setNewPassword(e);
    //     if (!e) {
    //         setErrorMessage('Vui lòng nhập mật khẩu');
    //         setValidPhone(false);
    //         return;
    //     }
    //     let formData = {
    //         NewPasswordd: e
    //     }

    //     let regex = new RegExp(/^(?=.*[a-zA-Z0-9]).{6,15}$/)
    //     let regexx = new RegExp(/^(?=.*[0-9]).{6,}$/)
    //     let regexxx = new RegExp(/^(?=.*[a-zA-Z]).{6,}$/)
    //     if (!regex.test(formData.NewPasswordd)) {
    //         setErrorMessage('Mật khẩu tối thiểu 6 kí tự và tối đa 15 kí tự');
    //         setValidPhone(false);
    //     }
    //     else {
    //         if (!regexx.test(formData.NewPasswordd)) {
    //             setErrorMessage('Mật khẩu phải có kí tự số');
    //             setValidPhone(false)
    //         }
    //         else {
    //             if (!regexxx.test(formData.NewPasswordd)) {
    //                 setErrorMessage('Mật khẩu phải có kí tự chữ');
    //                 setValidPhone(false)
    //             }
    //             else {
    //                 setValidPhone(true)
    //                 setErrorMessage('')

    //             }
    //         }
    //     }
    // }



    const [deviceId, setdeviceId] = useState('')
    const [deviceName, setdeviceName] = useState('')
    const [deviceSystem, setdeviceSystem] = useState('')

    const handleButtonClick = () => {
        Keyboard.dismiss();
    };


    const getdeviceId = async () => {
        var uniqueId = await DeviceInfo.getUniqueId();
        var deviceNamee = await DeviceInfo.getDeviceName();
        var deviceSystemm = await DeviceInfo.getSystemName();
        setdeviceId(uniqueId)
        setdeviceName(deviceNamee)
        setdeviceSystem(deviceSystemm)
    }

    useEffect(() => { getdeviceId() }, [])

    // const { authh } = route.params
    // const { tokenn } = route.params

    // const submit = () => {

    //     console.log(authh)
    //     console.log(tokenn)

    //     //http://192.168.86.20:3000/api/v1/users/newPassword
    //     if (isValidPhone && newPassword) {
    //         axios.post('https://ambio.vercel.app/api/v1/users/newPassword', {
    //             "phoneNumber": authh,
    //             "newPassWord": newPassword,
    //             "clientID": deviceId,
    //             "deviceName": deviceName,
    //             "operatingSystem": deviceSystem,
    //             "token": tokenn
    //         })
    //             .then(async res => {
    //                 await storeData(res.data.accessToken)
    //                 navigation.navigate('App_manage')
    //             })
    //             .catch(error => console.log(error.response.data))
    //     }
    //     verifyPhoneNumber3(newPassword);

    //     if (!isValidPhone) {
    //         return;
    //     }


    // };



    // const storeData = async (value) => {
    //     try {
    //         await AsyncStorage.setItem('accessToken', value);
    //     } catch (e) {
    //         //error
    //     }
    // };



    // const submitAll = () => {
    //     handleButtonClick();
    //     submit();
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
                    <Header textHeader="TẠO MẬT KHẨU MỚI" onBackPress={() => navigation.goBack()} />
                    <View style={styles.body}>
                        <View style={styles.logo}>
                        </View>
                        <View style={styles.register}>
                            <Text style={styles.TextInput}>Tạo mật khẩu mới để tiếp tục (mật khẩu nên chứa các kí tự chữ, số và có tối thiểu 6 kí tự)</Text>
                            <TextInputLogin ref={inputRef} placeholder="Mật khẩu" Validate={ValidateCreatePassword} autoCompleteType="password" autoCapitalize="none" autoCorrect={false} returnKeyType="send"/>

                            <Button textButton="TIẾP TỤC" Submit={getDataa} />

                        </View>



                        <View style={styles.footer}>
                            <Text style={styles.textFooterLeft} onPress={() => { navigation.navigate('Auth_login1') }}>Đăng nhập</Text>
                            <Text style={styles.textFooterRight} onPress={() => { navigation.navigate('Auth_register1') }}>Đăng ký</Text>

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

        color: '#383838'
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

export default Auth_forgotpassword3