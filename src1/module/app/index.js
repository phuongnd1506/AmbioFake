import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App_manage from './screen/app_manage';





const Stack = createNativeStackNavigator();




function IndexInApp({init}) {
  

  return (

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="app_manage" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="app_manage" component={App_manage}/>
        
      </Stack.Navigator>

    </NavigationContainer>

  )
}



export default IndexInApp;