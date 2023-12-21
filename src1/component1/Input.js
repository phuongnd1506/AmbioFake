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




export const TextInputLogin = ({ validate, errorM, isValidPhonee, phone }) => {




  return (
    <View style={styles.container}>
      <TextInput placeholder='Số điện thoại'
        style={
          isValidPhonee
            ? { ...styles.input }
            : { ...styles.input, ...styles.invalid }
        }
        keyboardType='numeric'

        onChangeText={(value) => {
          validate(value)
        }}
        value={phone}

      />
      <Text style={{ fontSize: 16, color: 'red', marginTop: 4 }}>{isValidPhonee ? '' : errorM}</Text>

    </View>

  )


};







export const TextInputLogin2 = ({ validate, errorM, isValidPhonee, phone }) => {
  const [isEye, setIsEye] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)

  const managePasswordVisibility = () => {


    setHidePassword(!hidePassword)
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={
          isValidPhonee
            ? { ...styles.input }
            : { ...styles.input, ...styles.invalid }
        }
        onChangeText={(value) => {
          validate(value)
        }}
        value={phone}
        placeholder='Mật khẩu'
        autoCompleteType='password'
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="send"
        secureTextEntry={hidePassword}

      />
      {isEye} ?
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.visibilityBtn}
        onPress={managePasswordVisibility}
      >
        <Image source={hidePassword ? require('../../asset/eye.png') : require('../../asset/hidden.png')} style={styles.btnImage} />

      </TouchableOpacity> : null
      <Text style={{ fontSize: 16, color: 'red', bottom: 12 }}>{isValidPhonee ? '' : errorM}</Text>
    </View>
  )
};












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


