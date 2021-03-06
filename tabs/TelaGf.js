import React from 'react';
import {Text, View, Button, Image, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import { PieChart, BarChart, Grid } from 'react-native-svg-charts'

    class PieChartWithDifferentArcs extends React.PureComponent {
        static navigationOptions = {
    tabBarLabel: 'Graficos',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/graph_icon.png')}
        style={{width: 22, height: 20, tintColor: 'white'}}>
      </Image>
    )
  }

        
        render() {
            
            const fill = 'green'
            const databarchart = [10, 20, 30, 40, 50]


            const data = [
                          {
                          key: 1,
                          value: 50,
                          svg: { fill: '#89ff2d' },
                          arc: { outerRadius: '130%', cornerRadius: 10,  }
                          },
                          {
                          key: 2,
                          value: 50,
                          svg: { fill: '#5bc30b' }
                          },
                          {
                          key: 3,
                          value: 40,
                          svg: { fill: '#448512' }
                          },
                          {
                          key: 4,
                          value: 60,
                          svg: { fill: '#bbbbbb' }
                          },
                          {
                          key: 5,
                          value: 35,
                          svg: { fill: '#339933' }
                          }
                          ]
            
            const data2 = [
                          {
                          key: 1,
                          value: 50,
                          svg: { fill: '#5e6717' },
                          arc: { outerRadius: '110%', cornerRadius: 5,  }
                          },
                          {
                          key: 2,
                          value: 50,
                          svg: { fill: '#638713' }
                          },
                          {
                          key: 3,
                          value: 40,
                          svg: { fill: '#519c16' }
                          },
                          {
                          key: 4,
                          value: 60,
                          svg: { fill: '#41b627' }
                          },
                          {
                          key: 5,
                          value: 35,
                          svg: { fill: '#3ac935' }
                          }
                          ]

            
            return (
                    <ScrollView style={{marginTop: 24}}>
                      <View style={{borderColor: 'darkgreen', borderBottomWidth: 10, borderTopWidth: 10, borderRadius: 10}}>
                        <Text style={{fontSize:26,fontWeight:'bold', marginTop:30, paddingHorizontal: 20}}>Primeiro grafico</Text>
                        <TouchableOpacity>
                          <PieChart
                          style={{ height: 400 }}
                          outerRadius={'70%'}
                          innerRadius={70}
                          data={data}
                          />
                        </TouchableOpacity>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 1</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 2</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 3</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 4</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', marginBottom: 10, paddingHorizontal: 5}}>legenda 5</Text>
                      </View>

                      <View style={{borderColor: 'darkgreen', borderBottomWidth: 10, borderTopWidth: 10, borderRadius: 10}}>
                        <Text style={{fontSize:26,fontWeight:'bold', marginTop:30, paddingHorizontal: 20}}>Segundo grafico</Text>
                        <TouchableOpacity>
                          <PieChart
                          style={{ height: 400 }}
                          outerRadius={'70%'}
                          innerRadius={70}
                          data={data}
                          />
                        </TouchableOpacity>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 1</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 2</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 3</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 4</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', marginBottom: 10, paddingHorizontal: 5}}>legenda 5</Text>
                      </View>
                    
                      <View style={{borderColor: 'darkgreen', borderBottomWidth: 10, borderTopWidth: 10, borderRadius: 10}}>
                        <Text style={{fontSize:26,fontWeight:'bold', marginTop:30, paddingHorizontal: 20}}>Terceiro grafico</Text>
                        <TouchableOpacity>
                          <BarChart
                            style={{height:200}}
                            data={databarchart}
                            svg={{fill}}
                            contentInset={{top:30,bottom:30}}
                          />
                        </TouchableOpacity>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 1</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 2</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 3</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', paddingHorizontal: 5}}>legenda 4</Text>
                        <Text style={{fontSize:16,fontWeight:'bold', marginBottom: 10, paddingHorizontal: 5}}>legenda 5</Text>
                      </View>
                    </ScrollView>
                    )
            
            
        }
        
    }

    export default PieChartWithDifferentArcs
