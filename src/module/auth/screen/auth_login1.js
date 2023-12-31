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
import {ActivityIndicator} from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Button from '../../../uicore/button.js';
import TextInputAuth from '../../../uicore/input.js';
import { validatePhone } from '../../../lib/validate.js';
import { handlePhoneLogin } from '../utils/utils.js';
import { showToast } from '../../../uicore/toast.js';



function Auth_login1({ navigation }) {
    const inputRef = useRef(null);
    


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
                            <TextInputAuth ref={inputRef} placeholder="Số điện thoại" validate = {validatePhone} keyboardType="numeric"/>
                            <Button textButton="TIẾP TỤC" onPresss={() => handlePhoneLogin(navigation, inputRef)} />
                        </View>



                        <View style={styles.footer}>
                            <Text style={styles.textFooterRegister} onPress={() => { navigation.navigate('auth_register1') }}>ĐĂNG KÝ TÀI KHOẢN</Text>
                            <Text style={styles.textForgotPassword} onPress={() => { navigation.navigate('auth_forgotPassword1') }}>Quên mật khẩu</Text>
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