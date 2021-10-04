import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import oneRoom from '../screens/oneRoom';

const oneStack = createNativeStackNavigator();

const oneRoomStackScreen = () => {
    return (
        <>
        <oneStack.Navigator>
            <oneStack.Screen name='İç Oda' component={oneRoom}
             options={{ headerShown: false, }}

            ></oneStack.Screen>
            
        </oneStack.Navigator>
        </>
    )
}

export default oneRoomStackScreen
