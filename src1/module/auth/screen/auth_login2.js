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
import Header from '../../../component1/Header.js';
import TextInputLogin from '../../../uicore/input.js';
import DeviceInfo from 'react-native-device-info';
import { Submit } from '../unti/API.js';
import { ValidatePassword } from '../../../lib/validate.js';
import { SubmitLogin2 } from '../unti/API.js';
import { getDataaPasswordLogin } from '../unti/unti.js';





function Auth_login2({ navigation, route }) {
    const [deviceId, setdeviceId] = useState('')
    const [deviceName, setdeviceName] = useState('')
    const [deviceSystem, setdeviceSystem] = useState('')

    const getdeviceId = async () => {
        var uniqueId = await DeviceInfo.getUniqueId();
        var deviceNamee = await DeviceInfo.getDeviceName();
        var deviceSystemm = await DeviceInfo.getSystemName();
        setdeviceId(uniqueId)
        setdeviceName(deviceNamee)
        setdeviceSystem(deviceSystemm)

    }

    useEffect(() => {getdeviceId()}, [])

    const {auth} = route.params
    const inputRef = useRef(null);
  
    // const getDataa = () => {
    //     if (inputRef.current.getData()) {
    //         const data = inputRef.current.getData();
    //         console.log(data, 35435344635435)

    //          SubmitLogin2(navigation, data, auth, deviceId, deviceName, deviceSystem);

    //     }

    //     if (inputRef.current.getData() == "") {
    //         console.log(5464564564)
    //         inputRef.current.showError("Vui lòng nhập mật khẩu")    
    //     }      

    // 
  
    // const handleButtonClick = () => {
    //     Keyboard.dismiss();
    // };


    // const getdeviceId = async () => {
    //     var uniqueId = await DeviceInfo.getUniqueId();
    //     var deviceNamee = await DeviceInfo.getDeviceName();
    //     var deviceSystemm = await DeviceInfo.getSystemName();
    //     setdeviceId(uniqueId)
    //     setdeviceName(deviceNamee)
    //     setdeviceSystem(deviceSystemm)

    // }

    // useEffect(() => { getdeviceId() }, [])

    // const submit = () => {
    //     const showToast = () => {
    //         Toast.show({
    //             type: "error",
    //             text1: "Thông báo",
    //             text2: "Số điện thoại hoặc mật khẩu không đúng, vui lòng thử lại sau",
    //             autoHide: true,
    //             position: 'top',
    //             visibilityTime: 2500,
    //             topOffset: 0,

    //         })
    //     }

    //     //http://192.168.86.20:3000/api/v1/users/login
    //     if (isValidPhone && password) {
    //         axios.post('https://ambio.vercel.app/api/v1/users/login', {
    //             "phoneNumber": auth,
    //             "passWord": password,
    //             "clientID": deviceId,
    //             "deviceName": deviceName,
    //             "operatingSystem": deviceSystem
    //         }).then(async res => {

    //             console.log(res.data)

    //             await storeData(res.data.accessToken)



    //             const value = await AsyncStorage.getItem('accessToken');

    //             navigation.navigate('App_manage')



    //         }
    //         )
    //             .catch(function (error) {
    //                 console.log(error)
    //                 if (error.response.data.errCode == "AMBIO002") {

    //                     showToast();

    //                 }
    //             });
    //     }

    //     verifyPhoneNumber3(password);

    //     if (!isValidPhone) {
    //         return;
    //     }

    // }

    // const storeData = async (value) => {
    //     try {
    //         await AsyncStorage.setItem('accessToken', value);

    //     } catch (e) {
    //         //error
    //     }
    // };

    // const submitAll = () => {
    //     submit()
    //     handleButtonClick()
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
                    <Header textHeader="ĐĂNG NHẬP" onBackPress={() => navigation.goBack()} />
                    <View style={styles.body}>
                        <Toast></Toast>
                        <View style={styles.logo}>
                        </View>
                        <View style={styles.register}>
                            <Text style={styles.TextInput}>Nhập mật khẩu của bạn để đăng nhập</Text>
                            <TextInputLogin ref={inputRef} placeholder="Mật khẩu" Validate={ValidatePassword} autoCompleteType="password" autoCapitalize="none" autoCorrect={false} returnKeyType="send"/>

                            <Button textButton="ĐĂNG NHẬP" Submit={() => getDataaPasswordLogin(inputRef, navigation, auth,  deviceId, deviceName, deviceSystem)} />

                        </View>



                        <View style={styles.footer}>
                            <Text style={styles.textFooterLeft} onPress={() => { navigation.navigate('auth_register1') }}>Đăng ký</Text>
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

export default Auth_login2