//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './pages/FirstPage';
import SmallRound from './pages/SmallRound';
import BigRound from './BigRound';
import Rating from './Rating';
import RoundData from './RoundData';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    FirstPage: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    SmallRound: { screen: SmallRound }, 
    BigRound: { screen: BigRound },
    Rating: { screen: Rating },
    RoundData: { screen: RoundData },
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);