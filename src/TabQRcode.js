import React, {Component} from 'react';
import {Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {TextInput} from 'react-native-gesture-handler';

const PATH_TO_LOGO = './assets/img/cmdev_icon.png';

export default class TabQRcode extends Component {
  constructor(props) {
    super(props);

    this.state = {qrValue: 'incloud', logo: require(PATH_TO_LOGO)};
  }

  getQRValue = () => {
    return this.state.qrValue != '' ? this.state.qrValue : 'codemobiles.com';
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#A6C4DA',
        }}>
        <TextInput
          placeholder="Please input qrcode value..."
          onChangeText={text => this.setState({qrValue: text})}
          style={{
            height: 40,
            width: '100%',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 5,
            marginTop: 20,
          }}></TextInput>

        <View style={{marginTop: 25}}>
          <QRCode value={this.getQRValue()} />
        </View>

        <View style={{marginTop: 25}}>
          <QRCode
            value={this.getQRValue()}
            logo={this.state.logo}
            logoSize={50}
          />
        </View>

        <View style={{marginTop: 25}}>
          <QRCode
            value={this.getQRValue()}
            logo={this.state.logo}
            logoSize={60}
            logoBorderRadius={30}
          />
        </View>
      </View>
    );
  }
}
