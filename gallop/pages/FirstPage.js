//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Image, ScrollView, Text} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'เลือกเส้นทางการท่องเที่ยว',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#D2691E',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  
  render() { 
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.boohis}>
                     <Button
                        onPress={() => navigate('RoundData')}
                        title='รายละเอียด'
                        color='#A0522D'
                        backgroundColor='black'
                        style={{ width: 185, margin: 1 }}
                    />
                    <Button
                        onPress={() => navigate('SmallRound')}
                        title='รอบเล็ก'
                        color='#CD853F'
                        backgroundColor='black'
                        style={{ width: 185, margin: 1 }}
                    />
                    <Button
                        onPress={() => navigate('BigRound')}
                        title='รอบใหญ่'
                        color='#EE9A49'
                        backgroundColor='black'
                        style={{ width: 500, margin: 50 }}
                    />
                    <Button
                        onPress={() => navigate('Rating')}
                        title='ให้คะเเนน'
                        color='#F4A460'
                        backgroundColor='black'
                        style={{ width: 500, margin: 50 }}
                    />
                </View>

        <Image
            source={require('../gallop2.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 470, height: 555}}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
},
boohis: {
    flexDirection: 'row',
    justifyContent: 'space-around'
    
},

});