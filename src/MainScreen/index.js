import React, { Component } from 'react'
import { View, Text, TextInput, CheckBox } from 'react-native'

class MainScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginVertical: 15, fontSize: 20}}> Simple Calculator </Text>
        <View style={{width: '95%', paddingHorizontal: 10}}>
          <TextInput
            style={{width: '80%', paddingVertical: 8, borderWidth: .6, borderColor: '#888888', borderRadius: 2}}
          />
          <CheckBox
            
          />
        </View>
      </View>
    )
  }
}

export default MainScreen;
