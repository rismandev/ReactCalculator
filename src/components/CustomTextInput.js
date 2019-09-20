import React, { Component } from 'react'
import { View, TextInput, StyleSheet, CheckBox } from 'react-native'

const CustomTextInput = (props) => {

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.TextInput}
        onChangeText={props.onChange}
      />
      <CheckBox
        onChange={props.onCheck}
        value={props.valueCheck}
      />
    </View>
  )

}

export default CustomTextInput

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    width: '95%',
    paddingHorizontal: 10,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInput: {
    width: '80%',
    paddingVertical: 8,
    borderWidth: .6,
    borderColor: '#888888',
    borderRadius: 2
  }
})
