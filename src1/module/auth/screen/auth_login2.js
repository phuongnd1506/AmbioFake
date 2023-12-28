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
import {ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {Button, Header} from '../../../uicore';
import TextInputAuth from '../../../uicore/input.js';
import DeviceInfo from 'react-native-device-info';
import { validatePassword } from '../../../lib/validate.js';
import { handlePasswordLogin } from '../util/utils.js';
import { loading } from '../util/utils.js';

function Auth_login2({ navigation, route }) {

    const {auth} = route.params
    const inputRef = useRef(null);
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
                    <Header textHeader="ĐĂNG NHẬP" onBackPress={() => navigation.goBack()} />
                    <View style={styles.body}>
                        <Toast></Toast>
                        <View style={styles.logo}>
                        </View>
                        <View style={styles.register}>
                            <Text style={styles.TextInput}>Nhập mật khẩu của bạn để đăng nhập</Text>
                            <TextInputAuth ref={inputRef} placeholder="Mật khẩu" validate={validatePassword} autoCompleteType="password" autoCapitalize="none" autoCorrect={false} returnKeyType="send"/>

                           <Button textButton="ĐĂNG NHẬP" onPresss={() => handlePasswordLogin(inputRef, navigation, auth)} /> 

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