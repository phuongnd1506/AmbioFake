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
import { indexx } from './index.js';
import { screennavigation } from '../../index.js';

function LoadingScreen() {
  





   useEffect(() => {
       indexx()
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


export default LoadingScreen