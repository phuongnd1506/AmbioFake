import {React, useState, useEffect} from 'react';
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
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import {PermissionsAndroid} from 'react-native';
// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//   messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });
//   AppRegistry.registerComponent('CreatePassword', () => CreatePassword);




const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)



function CreatePassword({navigation, route}){

  const [password, setPassword] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [tokenCFM, setTokenCFM] = useState('')
  
  const [deviceId, setdeviceId] = useState('')
  const [deviceName, setdeviceName] = useState('')
  const [deviceSystem, setdeviceSystem] = useState('')

  
  const getToken = async () => {
    const token = await messaging().getToken();
    setTokenCFM(token)
 
  }


  useEffect(() => {
    getToken()
  }, [])
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // const getToken = async ()=>{
  //   const tokenn = await messaging().getToken();
  //   setToken(tokenn)
  //   console.log(tokenn,8888)
  // }
  // useEffect(()=>{
  //   getToken()
  // },[])
  
  const {auth} = route.params
  const {tokenn} = route.params


  const  getdeviceId = async () => {
     var uniqueId =  await DeviceInfo.getUniqueId();
     var deviceNamee =  await DeviceInfo.getDeviceName();
     var deviceSystemm =  await DeviceInfo.getSystemName();
     setdeviceId(uniqueId)
     setdeviceName(deviceNamee)
     setdeviceSystem(deviceSystemm)
  }
 

 useEffect(() => {getdeviceId()}, [])

  
 
 
   const submit = () => {
   
    console.log(auth)
    console.log(tokenn)
    
    console.log(password)
    
    //http://192.168.86.20:3000/api/v1/users/signUp
    axios.post('https://ambio.vercel.app/api/v1/users/signUp	', { "phoneNumber": auth,
                                                                  "passWord": password,
                                                                  "token": tokenn,
                                                                  "deviceTokenCFM": tokenCFM,
                                                                  "clientID": deviceId,
                                                                  "deviceName": deviceName,
                                                                  "operatingSystem": deviceSystem})
     .then(async res => {       await   storeData(res.data.accessToken)
                         
                              const value = await AsyncStorage.getItem('accessToken');
    
                          isValidPhone ?  navigation.navigate('LoginManagement', {value}) : null

                          
                    }) 
    

     .catch(error => console.log(error.response.data))






 
    };



 
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('accessToken', value);
      } catch (e) {
        //error
      }




 verifyPhoneNumber3(password);                                                               
    if (!isValidPhone) {
      return;
    }

    console.log(password);

   
  };

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
      else{
            if(!regexx.test(formData.NewPasswordd)){
            setErrorMessage('Mật khẩu phải có kí tự số');
            setValidPhone(false)}
            else {
                if(!regexxx.test(formData.NewPasswordd)){
                    setErrorMessage('Mật khẩu phải có kí tự chữ');
                    setValidPhone(false)}
                else{
                    setValidPhone(true)
                    setErrorMessage('')
                }
            }
       }
    
    //   if(!(!regex.test(formData.NewPasswordd) && !regex.test(formData.NewPasswordd) && !regexxx.test(formData.NewPasswordd))){
    //      setErrorMessage('')
    //      setValidPhone(true)
    //   }

  }



  const [hidePassword, setHidePassword] = useState(true)

  const managePasswordVisibility = () => {


    setHidePassword(!hidePassword)
  }

      return(
        
          <View style={styles.container}>
            <SafeAreaView  edges={["left", "right", "top"]}
            style={{
            flex: 1,
            backgroundColor: "#00C853",
            position: 'relative'
                  }}>
                <View style={styles.header}>
             
                    <SvgComponent style={{width: 100, height: 100, color: '#fff', fontWeight: 'bold'}}
                                   onPress = {() => {navigation.goBack()}}
                    />
             
                 
                    <Text style={styles.textHeader}>TẠO MẬT KHẨU</Text>
                    <Text></Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.logo}>
                    {/* <Image source={require('./asset/ambio_1628393628-removebg-preview.png')}
                             style = {{width: 200, height: 200}}

                      /> */}
                    </View>
                    <View style ={styles.registryy}>
                      <Text style={styles.TextInput}>Nhập mật khẩu để đăng nhập ở lần sau</Text>
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
                      
                     
                      <Text style={{ fontSize: 16, color: 'red', bottom: 12 }}>{isValidPhone ? '' : errorMessage}</Text>
                      
                      <Text style={{textAlign:'center', marginTop: 20}}>Mật khẩu phải có độ dài tối thiểu 6 kí tự, bao gồm cả chữ và số, không trùng với số điện thoại và dễ đoán.</Text>
                      <TouchableOpacity style={styles.button} onPress={() => {submit();  }}>
                         <Text style = {styles.textButton}>HOÀN THÀNH</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                          <Text style={styles.textFooterLeft} onPress={() =>{navigation.navigate('Login')}}>Đăng nhập</Text>
                          <Text style={styles.textFooterRight} onPress={() =>{navigation.navigate('Passwordretrieval')}}>Quên mật khẩu</Text>

                    </View>



                </View>

            </SafeAreaView>
            <SafeAreaView  edges={["bottom"]}
              style={{ flex: 0, backgroundColor: "#ECEFF2" }}/>
            </View>
         
    )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#00C853',
        justifyContent: 'flex-end'
        
      },
     
      header:{ 
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
      textHeader:{
         color: '#fff',
         marginRight: 18,
         fontSize: 16,  
         fontWeight: '600',
         
      },


      body: {
       
        flex:  1,
        borderTopRightRadius: 26,
        borderTopLeftRadius: 26,
        backgroundColor: '#ECEFF2',
        // position: 'absolute',
        // right: 0,
        // left: 0,
        // bottom: 0,
        // top: 50

      },
      logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      registryy:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      input: {
        height: 50,
        backgroundColor: '#fff',
        width: 340,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'black',
        marginBottom: 0
      },
    //   rules: {
    //          width: 320,
    //          marginTop: 
    //   },

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
      TextInput: {
            marginBottom: 10,
            color: '#000'
      },

      invalid:{
        color:'red', 
        borderWidth: 1, 
        borderColor: 'red'
      },


      button: {
        height: 50,
        width:240,
        borderRadius: 5,
        backgroundColor: '#008F33',
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        
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

export default CreatePassword;
