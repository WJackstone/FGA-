import React from 'react';
import {Text, View, Button, Image } from 'react-native';
import { AppRegistry } from 'react-native';

export default class TelaPerfil extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/home_icon.png')}
        style={{width: 22, height: 22, tintColor: 'white'}}>
      </Image>
    )
  }

  render() {
    return <View style={
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
    }>
      <Text style={{fontSize: 30}}>
        Tela de perfil a ser implementada
      </Text>
    </View>
  }
}
