import React from "react";

import Splash from "../screens/SplashScreen";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Browse from "../screens/Browse";
import MyTabs from "../screens/Route";
import Loading from "../screens/Loading";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



  
  
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        {/* <Stack.Screen name="Browse" component={Browse} options={{headerShown: false}}/> */}
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
