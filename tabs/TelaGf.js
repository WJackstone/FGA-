import React from 'react';
import {Text, View, Button, Image, AppRegistry, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts'

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
                    <ScrollView>
                    <Text style={{fontSize:20,fontWeight:'bold', marginTop:30}}>Primeiro grafico</Text>
                    <PieChart
                    style={{ height: 400 }}
                    outerRadius={'70%'}
                    innerRadius={70}
                    data={data}
                    />

                    <Text style={{fontSize:20,fontWeight:'bold',}}>Segundo grafico</Text>
                    
                    <PieChart
                    style={{ height: 400 }}
                    outerRadius={'70%'}
                    innerRadius={70}
                    data={data2}
                    />
                    </ScrollView>
                    )
            
            
        }
        
    }

    export default PieChartWithDifferentArcs
