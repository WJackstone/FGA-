import React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from "react-navigation";
import TelaGf from './tabs/TelaGf'
import TelaPerfil from './tabs/TelaPerfil'

var MainScreenNavigator = createBottomTabNavigator({
  tab1: {screen: TelaGf},
  tab2: {screen: TelaPerfil}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'forestgreen',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: 'darkgreen',
    labelStyle: {
      fontSize: 16,
      padding: 0
    }
  }
}
);

MainScreenNavigator.navigationOptions ={
  title: "Tab example"
}

export default MainScreenNavigator;
