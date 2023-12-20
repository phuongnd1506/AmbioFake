import React, { useState, useEffect } from 'react';
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
import { Button, Header } from '../../component1';
import { TextInputLogin2 } from '../../component1/Input';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Auth_register3({ navigation, route }) {

    const [password, setPassword] = useState('')
    const [isValidPhone, setValidPhone] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const verifyPhoneNumber3 = (e) => {
        setPassword(e);
        if (!e) {
            setErrorMessage('Vui lòng nhập mật khẩu');
            setValidPhone(false);
            return;
        }
        let formData = {
            NewPasswordd: e
        }

        let regex = new RegExp(/^(?=.*[a-zA-Z0-9]).{6,15}$/)
        let regexx = new RegExp(/^(?=.*[0-9]).{6,}$/)
        let regexxx = new RegExp(/^(?=.*[a-zA-Z]).{6,}$/)
        if (!regex.test(formData.NewPasswordd)) {
            setErrorMessage('Mật khẩu tối thiểu 6 kí tự và tối đa 15 kí tự');
            setValidPhone(false);
        }
        else {
            if (!regexx.test(formData.NewPasswordd)) {
                setErrorMessage('Mật khẩu phải có kí tự số');
                setValidPhone(false)
            }
            else {
                if (!regexxx.test(formData.NewPasswordd)) {
                    setErrorMessage('Mật khẩu phải có kí tự chữ');
                    setValidPhone(false)
                }
                else {
                    setValidPhone(true)
                    setErrorMessage('')

                }
            }
        }
    }





    const [tokenCFM, setTokenCFM] = useState('')
    const [deviceId, setdeviceId] = useState('')
    const [deviceName, setdeviceName] = useState('')
    const [deviceSystem, setdeviceSystem] = useState('')

    const handleButtonClick = () => {
        Keyboard.dismiss();
    };



    const getToken = async () => {
        const token = await messaging().getToken();
        setTokenCFM(token)

    }


    useEffect(() => {
        getToken()
    }, [])


    const { auth } = route.params
    const { tokenn } = route.params

    const submit = () => {



        //http://192.168.86.20:3000/api/v1/users/signUp
        if (isValidPhone && password) {
            axios.post('https://ambio.vercel.app/api/v1/users/signUp', {
                "phoneNumber": auth,
                "passWord": password,
                "token": tokenn,
                "deviceTokenCFM": tokenCFM,
                "clientID": deviceId,
                "deviceName": deviceName,
                "operatingSystem": deviceSystem
            })
                .then(async res => {

                    console.log(res.data)

                    await storeData(res.data.accessToken)



                    const value = await AsyncStorage.getItem('accessToken');

                    navigation.navigate('App_manage')



                })


                .catch(error => { console.log(error) })

            verifyPhoneNumber3(password);

            if (!isValidPhone) {
                return;
            }
        }

    };

    const submitAll = () => {
        handleButtonClick()
        submit()
    }


    const getdeviceId = async () => {
        var uniqueId = await DeviceInfo.getUniqueId();
        var deviceNamee = await DeviceInfo.getDeviceName();
        var deviceSystemm = await DeviceInfo.getSystemName();
        setdeviceId(uniqueId)
        setdeviceName(deviceNamee)
        setdeviceSystem(deviceSystemm)
    }


    useEffect(() => { getdeviceId() }, [])


    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('accessToken', value);
        } catch (e) {
            //error
        }
    }

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
                    <Header textHeader="TẠO MẬT KHẨU" onBackPress={() => navigation.goBack()} />
                    <View style={styles.body}>
                        <View style={styles.logo}>
                        </View>
                        <View style={styles.register}>
                            <Text style={styles.TextInput}>Nhập mật khẩu để đăng nhập ở lần sau</Text>
                            <TextInputLogin2 validate={verifyPhoneNumber3} isValidPhonee={isValidPhone} errorM={errorMessage} phone={password} />
                            <Text style={styles.rules}>Mật khẩu phải có độ dài tối thiểu 6 kí tự, bao gồm cả chữ và số, không trùng với số điện thoại và dễ đoán.</Text>
                            <Button textButton="HOÀN THÀNH" Submit={submitAll} />

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
        color: '#000'
    },
    rules: {
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#000',
        alignItems: 'center',
        color: '#757575',
        top: 20

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

export default Auth_register3