import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import Articles from '../screens/Articles';
import Article from '../screens/Article';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Articles: Articles,
    Article: Article
  },
  {
    initialRouteName: "Home"
  }
)
export default createAppContainer(AppNavigator)

  
