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
  Fragment
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import Toast from 'react-native-toast-message';



function LoadingScreen(){



    return (
        <View style={{ flex: 1}}>
            <Image source={require('../asset/LoadingScreen.png')} />
        </View>
    )
}


export default LoadingScreen;