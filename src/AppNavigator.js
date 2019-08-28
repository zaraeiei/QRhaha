import React, {Component} from 'react';
import {Image} from 'react-native';

import TabQRcode from './TabQRcode';
import TabScanner from './TabScanner';
import TabBarcode from './TabBarcode';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

const tab1_option = {
  tabBarLabel: 'QRcode',
  tabBarIcon: ({focused}) => (
    <Image
      style={{height: 28, width: 28}}
      source={
        focused
          ? require("./assets/img/ic_qr_code_press.png")
          : require("./assets/img/ic_qr_code_normal.png")
      }
    />
  ),
};

const AppStack = createBottomTabNavigator(
  {
    tab1: {screen: TabQRcode, navigationOptions: tab1_option},
    tab2: {screen: TabBarcode},
    tab3: {screen: TabScanner},
  },
  {initialRouteName: 'tab1'},
);

export default createAppContainer(AppStack);
