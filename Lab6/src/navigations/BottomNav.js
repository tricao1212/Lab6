import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Customer from '../screens/Customer';
import Transaction from '../screens/Transaction';
import Setting from '../screens/Setting';

const BottomNav = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName="Customer"
    labeled={false}
    activeColor={'gray'}
    inactiveColor={'black'}
  >
    <Tab.Screen
      name="Customer"
      component={Customer}
      options={{
        tabBarIcon: 'format-list-bulleted',
        tabBarLabel: 'Updates',
      }}
    />
    <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{tabBarIcon: 'star-check'}}
    />
    <Tab.Screen
      name="Setting"
      component={Setting}
      options={{tabBarIcon: 'restart'}}
    />
  </Tab.Navigator>
  );
};

export default BottomNav;
