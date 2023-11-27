import {React, useState} from 'react';
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

function Passwordretrieval({navigation}){

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
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
             
                    <SvgComponent style={{color: '#fff', fontWeight: 'bold'}}
                                   onPress = {() => {navigation.goBack()}}
                    />
             
                 
                    <Text style={styles.textHeader}>QUÊN MẬT KHẨU</Text>
                    <Text></Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.logo}>
                    {/* <Image source={require('./asset/ambio_1628393628-removebg-preview.png')}
                             style = {{width: 200, height: 200}}

                      /> */}
                    </View>
                    <View style ={styles.registryy}>
                      <Text style={styles.TextInput}>Nhập số điện thoại của bạn để tiếp tục</Text>
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
                      <Text style={styles.rules}></Text>
                      <Text style={{position: 'absolute', fontSize: 16, color: 'red' }}>{isValidPhone ? '' : errorMessage}</Text>
                      <TouchableOpacity style={styles.button} onPress={() => submit()}>
                         <Text style = {styles.textButton}>QUÊN MẬT KHẨU</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                          <Text style={styles.textFooterLeft} onPress={() =>{navigation.navigate('Login')}}>Đăng nhập</Text>
                          <Text style={styles.textFooterRight} onPress={() =>{navigation.navigate('Register')}}>Đăng ký</Text>

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
        marginBottom: 12
      },
    //   rules: {
    //          width: 320,
    //          marginTop: 
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

export default Passwordretrieval;
