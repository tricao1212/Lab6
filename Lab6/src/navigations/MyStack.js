import React from 'react';
import Login from '../screens/Login';
import BottomNav from './BottomNav';
import AddCustomer from '../screens/AddCustomer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const MyStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="AddCustomer" component={AddCustomer} />
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
