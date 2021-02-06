import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import Browse from '../screens/Browse';
import Orders from '../screens/Orders';
import Notifications from '../screens/Notifications';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator()

function MyTabs() {

    return(
        <Tab.Navigator>
        <Tab.Screen name="Menu" component={Browse}  />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    )

}
export default MyTabs;