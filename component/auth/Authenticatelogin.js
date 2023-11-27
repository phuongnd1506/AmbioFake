import React, { useState } from 'react';
import { MaterialCommunityIcons } from "@react-navigation/native"; 
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
import SvgComponent from '../../asset/SVG/SvgComponent';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';




const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
  

function Authenticatelogin({navigation}){
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
          setErrorMessage('Vui lòng nhập mật khẩu');
          setValidPhone(false);
          return;
        }
        if(phone){
        setErrorMessage('')
        setValidPhone(true)
      }
    }

 const [hidePassword, setHidePassword] = useState(true)

 const managePasswordVisibility = () => {
         setHidePassword(!hidePassword)
 }

      return( 
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
           
                <View style={styles.header}>
             
                    <SvgComponent style={{color: '#fff', fontWeight: 'bold'}}
                                   onPress = {() => {navigation.goBack()}}
                    />
             
                     
                    <Text style={styles.textHeader}>ĐĂNG NHẬP</Text>
                    <Text></Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.logo}>
                    {/* <Image source={require('./asset/ambio_1628393628-removebg-preview.png')}
                             style = {{width: 200, height: 200}}

                      /> */}
                    </View>
                    <View style ={styles.registryy}>
                      <Text style={styles.TextInput}>Nhập mật khẩu của bạn để đăng nhập</Text>
                      <TextInput 
                            style={
                              isValidPhone 
                              ? {...styles.input}
                              : {...styles.input, ...styles.invalid}
                            }
                            onChangeText={(value) => {
                                verifyPhoneNumber3(value)
                              }}
                            value={phone}
                                 placeholder='Mật khẩu'
                                 autoCompleteType= 'password'
                                 autoCapitalize="none"
                                 autoCorrect={false}
                                 returnKeyType="send"
                                 secureTextEntry= {hidePassword}
                                 
                               
                      />
                       <TouchableOpacity 
                                  activeOpacity={0.8}
                                  style= {styles.visibilityBtn}
                                  onPress={managePasswordVisibility}
                       >
                           <Image source={hidePassword ? require('../../asset/eye.png') : require('../../asset/hidden.png')} style={styles.btnImage}/>

                       </TouchableOpacity>
                                  
                       

                      

                      {/* <Text style={styles.rules}>Bạn bấm tiếp tục là đồng nghĩa với việc chấp nhận <Text style={{textDecorationLine: 'underline', color: '#228B22'}} onPress={() =>{navigation.navigate('Terms')}}>điều khoản của chúng tôi</Text></Text> */}
                      <Text style={{ fontSize: 16, color: 'red', marginTop: 4 }}>{isValidPhone ? '' : errorMessage}</Text>
                      <TouchableOpacity style={styles.button} onPress={() => submit()}>
                         <Text style = {styles.textButton}>ĐĂNG NHẬP</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                              <Text style={styles.textFooterLeft} onPress={() =>{navigation.navigate('Register')}}>Đăng ký</Text>
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
        justifyContent: 'flex-end'
        
      },
     
      header:{ 
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14
        
       
      },
      backArrow: {
        color: '#fff',
        
      
        fontWeight: 'bold',
        fontSize: 40
       
      },
      textHeader:{
         color: '#fff',
         
         fontSize: 20,
         fontWeight: '500',
         
      },
      body: {
       
        flex:  1,
        borderTopRightRadius: 26,
        borderTopLeftRadius: 26,
        backgroundColor: '#dddddd',
       
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
        color : 'black',
        position: 'relative'
      },
      

      btnImage: {
         position: 'absolute',
         height: 20,
         width: 20,
         left: 138,
         bottom: 12

      },
    //   rules: {
    //          width: 320,
    //          marginTop: 54
    //   },
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
        marginTop: 48,
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
        fontSize: 20,
        fontWeight: '600'
    
      },
      textFooterRight: {
        marginBottom: 26,
        color: '#005920',
        fontSize: 20,
        fontWeight: '600'
      }
});

export default Authenticatelogin;
