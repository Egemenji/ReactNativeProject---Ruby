import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import livingRoomStackScreen from './navigation/livingRoomStackScreen';
import oneRoomStackScreen from './navigation/oneRoomStackScreen';
import roofStackScreen from './navigation/roofStackScreen';
import kitchenStackScreen from './navigation/kitchenStackScreen';


const Tab = createBottomTabNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name='Salon' component={livingRoomStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}></Tab.Screen>
        <Tab.Screen name='Mutfak' component={kitchenStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="meditation" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}
        ></Tab.Screen>
        <Tab.Screen name='İç Oda' component={oneRoomStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="headset" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}
        ></Tab.Screen>
        <Tab.Screen name='Çatı' component={roofStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}
        ></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;