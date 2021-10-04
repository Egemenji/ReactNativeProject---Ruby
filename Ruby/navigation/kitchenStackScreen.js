import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import kitchen from '../screens/kitchen'

const kitchenStack = createNativeStackNavigator();
 
const kitchenStackScreen = () => {
    return (
        <>
        <kitchenStack.Navigator>
            <kitchenStack.Screen name='Mutfak' component={kitchen}
             options={{ headerShown: false, }}

            ></kitchenStack.Screen>
            
        </kitchenStack.Navigator>
        </>
    )
}

export default kitchenStackScreen
