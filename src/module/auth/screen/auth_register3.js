import React, { useState, useEffect, useRef } from 'react';
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
import {Button, Header} from '../../../uicore';
import TextInputAuth from '../../../uicore/input.js';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateCreatePassword } from '../../../lib/validate.js';
import { handlePasswordRegister } from '../utils/utils.js';


function Auth_register3({ navigation, route }) {

    const inputRef = useRef(null);
    
    const { tokenn } = route.params;
    const { phone } = route.params;
    useEffect(() => {
        inputRef.current.showEye(true)
        inputRef.current.showPass(true)
    })
    



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
                            <TextInputAuth ref={inputRef} placeholder="Mật khẩu" validate={validateCreatePassword} autoCompleteType="password" autoCapitalize="none" autoCorrect={false} returnKeyType="send" />
                            <Text style={styles.rules}>Mật khẩu phải có độ dài tối thiểu 6 kí tự, bao gồm cả chữ và số, không trùng với số điện thoại và dễ đoán.</Text>
                            <Button textButton="HOÀN THÀNH" onPresss={() => handlePasswordRegister(phone, tokenn, inputRef)} />

                        </View>



                        <View style={styles.footer}>
                            <Text style={styles.textFooterLeft} onPress={() => { navigation.navigate('auth_login1') }}>Đăng nhập</Text>
                            <Text style={styles.textFooterRight} onPress={() => { navigation.navigate('auth_forgotPassword1') }}>Quên mật khẩu</Text>

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