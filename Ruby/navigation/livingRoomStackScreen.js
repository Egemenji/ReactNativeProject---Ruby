import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import livingRoom from '../screens/livingRoom'

const livingStack = createNativeStackNavigator();
 
const livingRoomStackScreen = () => {
    return (
        <>
        <livingStack.Navigator>
            <livingStack.Screen name='Salon' component={livingRoom}
             options={{ headerShown: false, }}

            ></livingStack.Screen>
            
        </livingStack.Navigator>
        </>
    )
}

export default livingRoomStackScreen
