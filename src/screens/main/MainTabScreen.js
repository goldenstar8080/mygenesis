import React, { Component } from 'react'
import {em} from '../../common'
import { TouchableOpacity, StatusBar, View, Text, Image } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchTabNavigator from './SearchTabNavigator'
import HomeTabNavigator from './HomeTabNavigator'
import MyOffersTabNavigator from './MyOffersTabNavigator'
import FavoritesTabNavigator from './FavoritesTabNavigator'
import CompleteTabNavigator from './CompleteTabNavigator'

const Tab = createBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = focused ? require('../../assets/images/tab_home_focused.png') : require('../../assets/images/tab_home.png')
            } else if (route.name === 'SearchTab') {
              iconName = focused ? require('../../assets/images/tab_research_focused.png') : require('../../assets/images/tab_research.png')
            } else if (route.name === 'MyOffersTab') {
              iconName = focused ? require('../../assets/images/tab_my_offers_focused.png') : require('../../assets/images/tab_my_offers.png')
            } else if (route.name === 'FavoritesTab') {
              iconName = focused ? require('../../assets/images/tab_favorites_focused.png') : require('../../assets/images/tab_favorites.png')
            } else if (route.name === 'CompleteTab') {
              iconName = focused ? require('../../assets/images/tab_complete_focused.png') : require('../../assets/images/tab_complete.png')
            }

            return <Image source={iconName} style={{width: 20*em, height: 20*em}} resizeMode={'stretch'} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1de1d7',
          inactiveTintColor: 'gray',
          style: {
            height: 65 * em,
            borderTopLeftRadius: 15 * em,
            borderTopRightRadius: 15 * em,
            position:'absolute',
            shadowOpacity: 0.2,
          },
          tabStyle: {
            marginTop: 5 * em
          },
          labelStyle: {
            marginBottom: 15 * em
          }
        }}
      >
        <Tab.Screen name="HomeTab" component={HomeTabNavigator} options={{ tabBarLabel: 'Accueil' }} />
        <Tab.Screen name="SearchTab" component={SearchTabNavigator} options={{ tabBarLabel: 'Rechercher' }} />
        <Tab.Screen name="MyOffersTab" component={MyOffersTabNavigator} options={{ tabBarLabel: 'Mes offres' }} />
        <Tab.Screen name="FavoritesTab" component={FavoritesTabNavigator} options={{ tabBarLabel: 'Favoris' }} />
        <Tab.Screen name="CompleteTab" component={CompleteTabNavigator} options={{ tabBarLabel: 'Compte' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
