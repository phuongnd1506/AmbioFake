import AsyncStorage from "@react-native-async-storage/async-storage";



const getToken = async () => {
 
        const value = await AsyncStorage.getItem('accessToken');
             
        return value
        

};

export default getToken;