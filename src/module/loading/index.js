




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading_loadingScreen from './screen/loading_loadingCreen';





const Stack = createNativeStackNavigator();




function IndexInLoading({init}) {
  

  return (

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="Loading_loadingScreen" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Loading_loadingScreen" component={Loading_loadingScreen}/>
        
      </Stack.Navigator>

    </NavigationContainer>

  )
}



export default IndexInLoading;