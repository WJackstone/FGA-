import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Alert, Platform, SectionList } from 'react-native';
import { CardList } from 'react-native-card-list';
import { AppRegistry } from 'react-native';

const cards = [
    {
      id: "0",
      title: "Matérias concluídas",
      picture: require('../images/unb-gama.jpg'),
      content: <SectionList
          sections={[
            {title: '1 Semestre', data: ['Calculo 1', 'Engenharia e ambiente', 'Introdução a engenharia', 'APC', 'DIAC']},
            {title: '2 Semestre', data: ['Calculo 2', 'IAL', 'Fisica 1', 'Probabilidade e estatistica', 'Fisica experimental']},
            {title: '3 Semestre', data: ['Engenharia economica', 'Desenvolvimento de Software', 'Matematica discreta', 'Humanidades e cidadania']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />

    },
    {
      id: "1",
      title: "Skills",
      picture: require('../images/skills.jpg'),
      content: <Text>Vai ter uma SectionList aqui</Text>
    }
  ]

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
        <View style={styles.cardSkills}>
          <CardList cards={cards} />
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
    fontSize:22,
    fontWeight: 'bold'
  },
  dadosPerfil: {
    fontSize: 16
  },
  cardSkills: {
    flex: 1,
    marginTop: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'white',
  }


});
