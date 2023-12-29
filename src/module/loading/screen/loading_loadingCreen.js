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

import { useEffect } from 'react';
import { handleScreen } from '../utils/utils.js';


function Loading_loadingScreen() {
  

   useEffect(() => {
    handleScreen()
   }, [])


    return (
        <>
            <StatusBar backgroundColor='#00C853' />
            <View style={{ flex: 1 }}>
                <Image source={require('../../../asset/LoadingScreen.png')} />
            </View>
        </>
    )

}


export default Loading_loadingScreen