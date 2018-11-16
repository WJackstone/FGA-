import React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from "react-navigation";
import TelaGf from './tabs/TelaGf'
import TelaPerfil from './tabs/TelaPerfil'

var MainScreenNavigator = createBottomTabNavigator({
  tab1: {screen: TelaPerfil},
  tab2: {screen: TelaGf}

});

MainScreenNavigator.navigationOptions ={
  title: "Tab example"
}

export default MainScreenNavigator;
