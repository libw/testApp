import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'
import { TabNavigator } from 'react-navigation';

import Recommend from './recommend'
import Daily from './daily'

const RootTabs = TabNavigator({
    Home: {
        screen: Recommend,
        navigationOptions: {
            tabBarLabel: '推荐',
        },
    },
    Profile: {
        screen: Daily,
        navigationOptions: {
            tabBarLabel: '最新',
        },
    },
})

export default RootTabs;

