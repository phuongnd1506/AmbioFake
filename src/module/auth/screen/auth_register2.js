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
import {Button, Header} from '../../../uicore';
import TextInputAuth from '../../../uicore/input.js';
import { validateCode } from '../../../lib/validate.js';
import { handleCodeRegister } from '../utils/utils.js';




function Auth_register2({ navigation, route }) {
    const inputRef = useRef(null);
    const {phone} = route.params
    const {tokenn} = route.params
    console.log(phone,"phone registerrrrrrrrrrrrrrrr")
    

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
                        <Text style={styles.TextInput}>Một mã xác nhận dùng để đăng ký đã được gửi đến số điện thoại: {phone}</Text>
                        <TextInputAuth ref={inputRef} placeholder="Nhập mã xác nhận" validate = {validateCode} keyboardType="numeric"/>

                        <Button textButton="TIẾP TỤC" onPresss={() => handleCodeRegister(tokenn, phone, inputRef, navigation)} />

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