import AsyncStorage from "@react-native-async-storage/async-storage";



const getToken = async () => {
 
        const value = await AsyncStorage.getItem('accessToken');
        console.log(value,123123)
       
            
            return value
          

};

export default getToken