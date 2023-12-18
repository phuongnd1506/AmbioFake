import {React, useState} from 'react';
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


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

function AuthRegister({navigation, route}){

  const [phone, setPhone] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')


  const {tokenn} = route.params
  const {auth} = route.params

  const submit = () => {
    verifyPhoneNumber3(phone);

    if (!isValidPhone) {
      return;
    }

    console.log(phone)
    console.log(route.params.auth)
    console.log(route.params.tokenn)
    
     //http://192.168.86.20:3000/api/v1/users/verifyCode
     axios.post('https://ambio.vercel.app/api/v1/users/verifyCode', {"phoneNumber": auth, "code": Number.parseInt(phone),  "token": tokenn})
      .then(res => {
                    
        isValidPhone ? navigation.navigate('CreatePassword', {tokenn, auth}) : null

                           })

      .catch(function (error) {
        if (error.response.data.errCode == 'AMBIO002') {
               setErrorMessage('Code không hợp lệ hoặc hết hạn')
               setValidPhone(false)
        } 
      });

  };

  const verifyPhoneNumber3 = (e) => {
    setPhone(e);
    if (!e) {
      setErrorMessage('Vui lòng nhập mã xác nhận');
      setValidPhone(false);
      return;
    }

    let formData = {
      pphone: e
    }

    if(phone){
        setErrorMessage('');
        setValidPhone(true)
    }
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
             
                 
                    <Text style={styles.textHeader}>NHẬP MÃ XÁC NHẬN</Text>
                    <Text></Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.logo}>
                    {/* <Image source={require('./asset/ambio_1628393628-removebg-preview.png')}
                             style = {{width: 200, height: 200}}

                      /> */}
                    </View>
                    <View style ={styles.registryy}>
                      <Text style={styles.TextInput}>Một mã xác nhận dùng để đăng ký đã được gửi đến số điện thoại: {route.params.auth}</Text>
                      <TextInput placeholder='Nhập mã xác nhận'
                                 keyboardType= 'numeric'
                                 style={
                                  isValidPhone 
                                    ? {...styles.input}
                                    : {...styles.input, ...styles.invalid}
                                }       
                                onChangeText={(value) => {
                                  verifyPhoneNumber3(value)
                                }}
                                value={phone}
                       />
                      <Text style={styles.rules}></Text>
                      <Text style={{fontSize: 16, color: 'red', marginBottom: 22}}>{isValidPhone ? '' : errorMessage}</Text>
                      <TouchableOpacity style={styles.button} onPress={() => submit()}>
                         <Text style = {styles.textButton}>TIẾP TỤC</Text>
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
         marginRight: 11,
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
        marginTop: 1
      },
    //   rules: {
    //          width: 320,
    //          marginTop: 
    //   },
      TextInput: {
            marginBottom: 10,
            color: '#000',
            paddingHorizontal: 26,
            textAlign: 'center'
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
        marginTop: 4,
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

export default AuthRegister;
