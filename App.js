import React from 'react';
import { Text, View } from 'react-native';

import { TabNavigator } from "react-navigation";
import TelaGf from './tabs/TelaGf'
import TelaPerfil from './tabs/TelaPerfil'

var MainScreenNavigator = TabNavigator({
  tab1: {screen: TelaGf},
  tab2: {screen: TelaPerfil}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'darkgreen',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'green',
    labelStyle: {
      fontSize: 16,
      padding: 0
    }
  }
}
});

MainScreenNavigator.navigationOptions ={
  title: "Tab example"
}

export default MainScreenNavigator;
