import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from "@react-navigation/native";
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
} from 'react-native';
import SvgComponent from '../../asset/SVG/SvgComponent';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import DeviceInfo from 'react-native-device-info';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)


function Authenticatelogin({ navigation, route }) {
  const [password, setPassword] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [deviceId, setdeviceId] = useState('')
  const [deviceName, setdeviceName] = useState('')
  const [deviceSystem, setdeviceSystem] = useState('')
  

  const  getdeviceId = async () => {
    var uniqueId =  await DeviceInfo.getUniqueId();
    var deviceNamee =  await DeviceInfo.getDeviceName();
    var deviceSystemm = await DeviceInfo.getSystemName();
    setdeviceId(uniqueId)
    setdeviceName(deviceNamee)
    setdeviceSystem(deviceSystemm)

 }
  
 useEffect(() => {getdeviceId()}, [])
 

 const {auth} = route.params

  const submit = () => {


    const showToast = () => {
      Toast.show({
        type: "error",
        text1: "Thông báo",
        text2: "Số điện thoại hoặc mật khẩu không đúng, vui lòng thử lại sau",
        autoHide: true,
        position: 'top',
        visibilityTime: 2500,
        topOffset: 0,
        
      })
    }

    verifyPhoneNumber3(password);

    if (!isValidPhone) {
      return;
    }

    console.log(password);

      //http://192.168.86.20:3000/api/v1/users/login
      axios.post('https://ambio.vercel.app/api/v1/users/login', {
      "phoneNumber": auth,
      "passWord": password,
      "clientID": deviceId,
      "deviceName": deviceName,
      "operatingSystem": deviceSystem
    }).then(async res => {

      console.log(res.data)

      await storeData(res.data.accessToken)
        
   

      const value = await AsyncStorage.getItem('accessToken');
    
      isValidPhone ?  navigation.navigate('LoginManagement', {value}) : null

    

    }
    )
    .catch(function (error) {
     
      if (error.response.data.errCode == "AMBIO002") {
       
        showToast();
   
      }
    });
  


  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('accessToken', value);
     
    } catch (e) {
      //error
    }
  };
  const verifyPhoneNumber3 = (e) => {
    setPassword(e);
    if (!e) {
      setErrorMessage('Vui lòng nhập mật khẩu');
      setValidPhone(false);
      return;
    }
    if (password) {
      setErrorMessage('')
      setValidPhone(true)
    }

  

  }

  const [hidePassword, setHidePassword] = useState(true)

  const managePasswordVisibility = () => {


    setHidePassword(!hidePassword)
  }

  return (
    

      <View style={styles.container}>
        <SafeAreaView edges={["left", "right", "top"]}
          style={{
            flex: 1,
            backgroundColor: "#00C853",
            position: 'relative'
          }}>

          <View style={styles.header}>

            <SvgComponent style={{ width: 100, height: 100, color: '#fff', fontWeight: 'bold' }}
              onPress={() => { navigation.goBack() }}
            />


            <Text style={styles.textHeader}>ĐĂNG NHẬP</Text>
            <Text></Text>
          </View>
          <View style={styles.body}>
            <Toast/>
            <View style={styles.logo}>
              {/* <Image source={require('./asset/ambio_1628393628-removebg-preview.png')}
                             style = {{width: 200, height: 200}}

                      /> */}
            </View>
            <View style={styles.registryy}>
              <Text style={styles.TextInput}>Nhập mật khẩu của bạn để đăng nhập</Text>
              <TextInput
                style={
                  isValidPhone
                    ? { ...styles.input }
                    : { ...styles.input, ...styles.invalid }
                }
                onChangeText={(value) => {
                  verifyPhoneNumber3(value)
                }}
                value={password}
                placeholder='Mật khẩu'
                autoCompleteType='password'
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="send"
                secureTextEntry={hidePassword}


              />
             
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.visibilityBtn}
                onPress={managePasswordVisibility}
              >
                <Image source={hidePassword ? require('../../asset/eye.png') : require('../../asset/hidden.png')} style={styles.btnImage} />

              </TouchableOpacity>
             




              {/* <Text style={styles.rules}>Bạn bấm tiếp tục là đồng nghĩa với việc chấp nhận <Text style={{textDecorationLine: 'underline', color: '#228B22'}} onPress={() =>{navigation.navigate('Terms')}}>điều khoản của chúng tôi</Text></Text> */}
              <Text style={{ fontSize: 16, color: 'red', bottom: 12 }}>{isValidPhone ? '' : errorMessage}</Text>
              <TouchableOpacity style={styles.button} onPress={() => submit()}>
                <Text style={styles.textButton}>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.textFooterLeft} onPress={() => { navigation.navigate('Register') }}>Đăng ký</Text>
              <Text style={styles.textFooterRight} onPress={() => { navigation.navigate('Passwordretrieval') }}>Quên mật khẩu</Text>

            </View>



          </View>


        </SafeAreaView>
        <SafeAreaView edges={["bottom"]}
          style={{ flex: 0, backgroundColor: "#ECEFF2" }} />

      </View>
   

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C853',
    justifyContent: 'flex-end',
    // position: 'relative'

  },

  header: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    // marginBottom: 706

  },
  backArrow: {
    color: '#fff',


    fontWeight: 'bold',
    fontSize: 40

  },
  textHeader: {
    color: '#fff',
    marginRight: 23,
    fontSize: 16,
    fontWeight: '600',

  },
  body: {

    flex: 1,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    backgroundColor: '#ECEFF2',
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 50,
    // bottom: 0
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registryy: {
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
    color: 'black',
    position: 'relative'
  },

  visibilityBtn: {
     
        backgroundColor: '#fff',
        height: 20,
        width: 20,
        bottom: 34,
        left: 146


  },

  btnImage: {
    position: 'absolute',
    height: 20,
    width: 20,
   
    bottom: 1,
  
  },
  
  //   rules: {
  //          width: 320,
  //          marginTop: 54
  //   },
  TextInput: {
    marginBottom: 10,
    color: '#000'
  },

  invalid: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'red'
  },

  button: {
    height: 50,
    width: 240,
    borderRadius: 5,
    backgroundColor: '#008F33',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    fontWeight: '500'
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

export default Authenticatelogin;
