import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Alert } from 'react-native';

import { AppRegistry } from 'react-native';

export default class TelaPerfil extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/home_icon.png')}
        style={{width: 22, height: 20, tintColor: 'white'}}/>
    )
  }

  _onPressGrade(){
    Alert.alert('Abre a grade para edição')
  }

  render() {
    return (

      <ScrollView style={styles.container}>
        <View style={styles.gradeView, {borderBottomColor: 'grey', borderBottomWidth: 1}}>
          <TouchableOpacity onPress={this._onPressGrade}>
            <Image source={require('../assets/grade.png')} style={styles.gradeImg}/>
          </TouchableOpacity>
        </View>
        <View style={styles.infoPerfil}>
          <View style={{height:40}}>
            <Text style={styles.nomePerfil}>Daniel de Andrade Souza</Text>
          </View>
          <View style={{height:30}}>
            <Text style={styles.dadosPerfil}>Estudante de graduação na FGA</Text>
          </View>
          <View style={{height:30}}>
            <Text style={styles.dadosPerfil}>Engenharia de Software</Text>
          </View>
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
  gradeView: {
    height: 200,
    width: 450,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  gradeImg: {
    height: 200,
    width: 450,
    marginTop: 20
  },
  infoPerfil: {
    flex:1,
    justifyContent: 'space-evenly',
    marginTop: 100,
    padding: 2
  },
  nomePerfil: {
    fontSize:24,
    fontWeight: 'bold'
  },
  dadosPerfil: {
    fontSize: 17
  }


});
