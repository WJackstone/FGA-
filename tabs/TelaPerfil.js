import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Alert } from 'react-native';

import { AppRegistry } from 'react-native';

export default class TelaPerfil extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/home_icon.png')}
        style={{width: 20, height: 20, tintColor: 'white'}}>
      </Image>
    )
  }

  _onPressGrade(){
    Alert.alert('Abre a grade para edição')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.grade}>
          <TouchableOpacity onPress={this._onPressGrade}>
            <Image source={require('../assets/grade.png')} style={styles.grade}/>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  grade: {
    height: 200,
    width: 450,
    backgroundColor: 'white',
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
