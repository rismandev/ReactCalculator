import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.Button}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
  Button : {
    padding: 8,
    marginHorizontal: 6,
    borderRadius: 2,
    borderWidth: .5,
    borderColor: '#9d9f9f',
    minWidth: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
