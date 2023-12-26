




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './screen/loadingcreen';





const Stack = createNativeStackNavigator();




function IndexInLoading({init}) {
  

  return (

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="loadingScreen" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="loadingScreen" component={LoadingScreen}/>
        
      </Stack.Navigator>

    </NavigationContainer>

  )
}



export default IndexInLoading;