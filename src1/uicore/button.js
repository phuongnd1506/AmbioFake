
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


function Button({textButton, Submit}){
   return(
         <View style= {styles.container}>
            
            <TouchableOpacity style={styles.button} onPress={Submit}>
                         <Text style = {styles.textButton}>{textButton}</Text>
                     
            </TouchableOpacity>
         </View>
   )
}


const styles = StyleSheet.create({
  container: {
     marginTop: 30
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



});

export default Button;