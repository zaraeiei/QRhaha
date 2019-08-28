import React, { Component } from 'react';
import { View } from 'react-native';

import Barcode from 'react-native-barcode-builder';

export default class TabBarcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Barcode value="Hello World" format="CODE128" />
      </View>
    );
  }
}
