import { useEffect, useState } from 'react';
import { View, Image, StyleSheet,StatusBar } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';



function LoadingScreen({ setLoading, setLogin }) {
    [token, setToken] = useState("")


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('accessToken');
            if (value !== null) {
                setToken(value)
              

            }
            else{ setLoading(false), setLogin(false) }
        } catch (e) {
        }
    };
   
    useEffect(() => {
        getData();
    }, []);

    

          submit =  async () => {
         await  axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
            "token": token
        })
            .then(res => {
                setLogin(true)
                setLoading(false)
            })
            .catch(error => setLoading(false), setLogin(false))
        }
    useEffect(() =>{
       token && submit()
    },[token])
  

    return (
        <>
        <StatusBar backgroundColor= '#00C853'/>
        <View style={{ flex: 1 }}>
            <Image source={require('../../../asset/LoadingScreen.png')} />
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#00C853',

        // position: 'relative'

    }
});

export default LoadingScreen;