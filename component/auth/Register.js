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
} from 'react-native';
import SvgComponent from '../../asset/SVG/SvgComponent';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

function Register({navigation}){
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



      return(
        <DismissKeyboard>
            <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
              
                <View style={styles.header}>
             
                    <SvgComponent style={{width: 100, height: 100, color: '#fff', fontWeight: 'bold', /*position: 'absolute', bottom: 720, left: 18*/}}
                                   onPress = {() => {navigation.goBack()}}
                    />
             
                 
                    <Text style={styles.textHeader}>ĐĂNG KÝ</Text>
                    <Text></Text>
               </View>
                <View style={styles.body}>
                    <View style={styles.logo}>
                    {/* <Image source={require('./asset/ambio_1628393628-removebg-preview.png')}
                             style = {{width: 200, height: 200}}

                      /> */}
                    </View>
                    <View style ={styles.registryy}>
                      <Text style={styles.TextInput}>Nhập số điện thoại của bạn sau đó tiếp tục</Text>
                      <TextInput placeholder='Số điện thoại'
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

                      <Text style={{ fontSize: 16, color: 'red', marginTop: 4 }}>{isValidPhone ? '' : errorMessage}</Text>

                      <Text style={styles.rules}>Bạn bấm tiếp tục là đồng nghĩa với việc chấp nhận <Text style={{textDecorationLine: 'underline', color: '#228B22'}} onPress={() =>{navigation.navigate('Terms')}}>điều khoản của chúng tôi</Text></Text>
                      
                      <TouchableOpacity style={styles.button} onPress={() => {submit(); isValidPhone ?  navigation.navigate('AuthRegister', {auth: phone})  : null }}>
                         <Text style = {styles.textButton}>TIẾP TỤC</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                              <Text style={styles.textFooterLeft} onPress={() =>{navigation.navigate('Login')}}>Đăng nhập</Text>
                              <Text style={styles.textFooterRight} onPress={() =>{navigation.navigate('Passwordretrieval')}}>Quên mật khẩu</Text>

                    </View>



                </View>
             
            </SafeAreaView>
          </DismissKeyboard>
      )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#00C853',
        justifyContent: 'flex-end',
        // position: 'relative'
      },
     
      header:{ 
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        // position: 'relative'
        
       
      },
      backArrow: {
        color: '#fff',
       
        
        fontWeight: 'bold',
        fontSize: 40
       
      },
      textHeader:{
         color: '#fff',
         fontSize: 16,
         fontWeight: '600',
         marginRight: 26
        //  position: 'absolute',
        //  bottom: 720,
        //  left: 150
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
      rules: {
             width: 320,
             marginTop: 54,
             fontSize: 16,
             color: '#000'
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
        marginTop: 22,
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

export default Register;
