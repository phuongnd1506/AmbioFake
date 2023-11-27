import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';



const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

function Login({ navigation }) {
  const [phone, setPhone] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const submit = () => {
    verifyPhoneNumber3(phone);

    if (!isValidPhone) {
      return;
    }

    console.log(phone);
  };

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

    let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/)
    if (!regex.test(formData.pphone)) {
      setErrorMessage('Số điện thoại không hợp lệ');
      setValidPhone(false);
    } else {
      setValidPhone(true);
      setErrorMessage('');
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <DismissKeyboard>
        <View style={styles.body}>
          <View style={styles.logo}>
            <Image source={require('../../asset/ambio_1628393628-removebg-preview.png')}
              style={{ width: 200, height: 200 }}

            />
          </View>
          <View style={styles.login}>
            <Text style={styles.TextInput}>Nhập số điện thoại của bạn để đăng nhập</Text>
            <TextInput placeholder='Số điện thoại'
              style={
                isValidPhone 
                  ? {...styles.input}
                  : {...styles.input, ...styles.invalid}
              }
              keyboardType='numeric'

              onChangeText={(value) => {
                verifyPhoneNumber3(value)
              }}
              value={phone}

            />
            <Text style={{ fontSize: 16, color: 'red', marginTop: 4 }}>{isValidPhone ? '' : errorMessage}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {submit(); { navigation.navigate('Authenticatelogin')}}} >
              <Text style={styles.textButton}>TIẾP TỤC</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.textFooterRegister} onPress={() => { navigation.navigate('Register') }}>ĐĂNG KÝ TÀI KHOẢN</Text>
            <Text style={styles.textForgotPassword} onPress={() => { navigation.navigate('Passwordretrieval') }}>Quên mật khẩu</Text>
            <Text style={styles.textVersion}>Phiên bản: 2.0.1.60 beta</Text>
          </View>

        </View>
      </DismissKeyboard>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C853',
    justifyContent: 'flex-end'

  },
  body: {

    height: 732,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    backgroundColor: '#dddddd',

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
  input: {
    height: 50,
    backgroundColor: '#fff',
    width: 340,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    color : 'black'
  },
  TextInput: {
    marginBottom: 10,
    color: '#000'
  },
  button: {
    height: 50,
    width: 240,
    borderRadius: 5,
    backgroundColor: '#008F33',
    marginTop: 46,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    fontWeight: '500'
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
    fontSize: 20,
    marginTop: 32,
    fontWeight: '600',
    color: '#005920'

  },
  textVersion: {
    position: 'absolute',
    bottom: 0
  },

  invalid:{
    color:'red', 
    borderWidth: 1, 
    borderColor: 'red'
  }
});

export default Login;
