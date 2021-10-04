import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import roof from '../screens/roof';

const roofStack = createNativeStackNavigator();

const roofStackScreen = () => {
    return (
        <>
        <roofStack.Navigator>
            <roofStack.Screen name='Çatı Katı' component={roof}
             options={{ headerShown: false, }}

            ></roofStack.Screen>

        </roofStack.Navigator>
        </>
    )
}

export default roofStackScreen
