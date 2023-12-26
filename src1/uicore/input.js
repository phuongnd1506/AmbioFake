import React, { useState, useRef } from 'react';
import {
    Image,


    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,


    View,

} from 'react-native';
import { ValidatePhone } from '../lib/validate.js';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useImperativeHandle } from 'react';




const TextInputAuth = ({ placeholder, autoCompleteType, autoCapitalize, autoCorrect, returnKeyType, keyboardType, validate }, ref) => {
    const [isVali, setIsVali] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const [phone, setPhone] = useState("")
    const [isEye, setisEye] = useState(false)

    const [hidePassword, setHidePassword] = useState(false)

    const managePasswordVisibility = () => {


        setHidePassword(!hidePassword)
    }


    useImperativeHandle(ref, () => ({
        getData: () => {
            const rs = validate(phone)
            if (rs != "") {
                setErrorMessage(rs)
                setIsVali(false)
              
            }else {
                return phone
            }  
        },
        showError: (value) => {
            setErrorMessage(value)
            setIsVali(false)
        },
        showEye: (value) => {
            setisEye(true)
        },
        showPass: (value) => {
            setHidePassword(true)
        }

    }));


    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder}
                autoCompleteType={autoCompleteType}    //'password'
                autoCapitalize={autoCapitalize}        //"none"
                autoCorrect={autoCorrect}              //{false}
                returnKeyType={returnKeyType}          //"send"
                secureTextEntry={hidePassword}      //{hidePassword}
                style={
                    isVali
                        ? { ...styles.input }
                        : { ...styles.input, ...styles.invalid }
                }
                keyboardType={keyboardType}

                onChangeText={(value) => {
                    setPhone(value)
                    var rs = validate(value)
                    if (rs) {
                        setErrorMessage(rs)
                        setIsVali(false)
                    } else {
                        setErrorMessage("")
                        setIsVali(true)
                    }


                }}
                value={phone}


            />

            {isEye ?
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.visibilityBtn}
                    onPress={managePasswordVisibility}
                >
                    <Image source={hidePassword ? require('../asset/eye.png') : require('../asset/hidden.png')} style={styles.btnImage} />

                </TouchableOpacity> : null}
            <Text style={{ fontSize: 16, color: 'red', marginTop: 4 }}>{isVali ? '' : errorMessage}</Text>

        </View>

    )


};

export default forwardRef(TextInputAuth)







// export const TextInputLogin2 = ({ validate, errorM, isValidPhonee, phone }) => {

//     const [hidePassword, setHidePassword] = useState(true)

//     const managePasswordVisibility = () => {


//         setHidePassword(!hidePassword)
//     }


//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={
//                     isValidPhonee
//                         ? { ...styles.input }
//                         : { ...styles.input, ...styles.invalid }
//                 }
//                 onChangeText={(value) => {
//                     validate(value)
//                 }}
//                 value={phone}
//                 placeholder='Mật khẩu'
//                 autoCompleteType='password'
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 returnKeyType="send"
//                 secureTextEntry={hidePassword}


//             />

//             <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={styles.visibilityBtn}
//                 onPress={managePasswordVisibility}
//             >
//                 <Image source={hidePassword ? require('../../asset/eye.png') : require('../../asset/hidden.png')} style={styles.btnImage} />

//             </TouchableOpacity>
//             <Text style={{ fontSize: 16, color: 'red', bottom: 12 }}>{isValidPhonee ? '' : errorM}</Text>
//         </View>
//     )
// };












const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        width: 340,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'black'
    },


    invalid: {
        color: 'red',
        borderWidth: 1,
        borderColor: 'red'
    },

    btnImage: {
        position: 'absolute',
        height: 20,
        width: 20,
        bottom: 1,
    },
    visibilityBtn: {

        backgroundColor: '#fff',
        height: 20,
        width: 20,
        bottom: 34,
        left: 146


    },

});


