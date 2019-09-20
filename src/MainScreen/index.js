import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Using Component
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

class MainScreen extends Component {

  state = {
    valueInput : {
      first : null,
      second : null,
      three : null
    },
    valueCheckBox : {
      firstCheck : false,
      secondCheck : false,
      threeCheck : false
    },
    result: null
  }

  /* Handle Value Text Input
   * valueNumber is Number on TextInput
   * valueInput is value on TextInput it will be parse integer type
   */
  handleChangeValueInput = (valueNumber, valueInput) => {

    if(valueNumber == 1){

      this.setState({ valueInput : {...this.state.valueInput, first: parseInt(valueInput)}})

    }else if(valueNumber == 2){

      this.setState({ valueInput : {...this.state.valueInput, second: parseInt(valueInput)}})

    }else {

      this.setState({ valueInput : {...this.state.valueInput, three: parseInt(valueInput)}})

    }

  }

  /* Handle Action
   * Action option : addition, subtraction, multiplication & division
   * Calculate from TextInput value
   */
  handleAction = (option) => {

    const { first, second, three } = this.state.valueInput
    const { firstCheck, secondCheck, threeCheck } = this.state.valueCheckBox
    let addition, subtraction, multiplication, division = 0
    let result = null

    if(first && second && three && firstCheck && secondCheck && threeCheck){

      addition = first + second + three
      subtraction = first - second - three
      multiplication = first * second * three
      division = first / second / three

    }else if(first && second && firstCheck && secondCheck){

      addition = first + second
      subtraction = first - second
      multiplication = first * second
      division = first / second

    }else if(second && three && secondCheck && threeCheck){

      addition = second + three
      subtraction = second - three
      multiplication = second * three
      division = second / three

    }else if(first && three && firstCheck && threeCheck){

      addition = first + three
      subtraction = first - three
      multiplication = first * three
      division = first / three

    }else {

      alert('Minimum 2 Input with Checked')

    }

    if(option == 1){

      this.setState({ result: addition })

    }else if(option == 2){

      this.setState({ result: subtraction })

    }else if(option == 3){

      this.setState({ result: multiplication })

    }else if(option == 4){

      this.setState({ result: division })

    }

  }

  /* Handle Change CheckBox
   * Option CheckBox is Number on CheckBox
   * Save Updated on State
   * CheckBox using boolean
   */
  handleChangeValueCheckBox = (option) => {

    const { firstCheck, secondCheck, threeCheck } = this.state.valueCheckBox

    if(option == 1){
      this.setState({
        valueCheckBox: {...this.state.valueCheckBox, firstCheck: !firstCheck}
      })
    }else if(option == 2){
      this.setState({
        valueCheckBox: {...this.state.valueCheckBox, secondCheck: !secondCheck}
      })
    }else if(option == 3){
      this.setState({
        valueCheckBox: {...this.state.valueCheckBox, threeCheck: !threeCheck}
      })
    }

  }

  render() {

    const { first, second } = this.state.valueInput

    return (
      <View style={styles.container}>

        {/* Title */}
        <Text style={styles.title}> Calculator </Text>

        {/* TextInput & CheckBox */}
        <CustomTextInput
          onChange={(value) => this.handleChangeValueInput( 1, value)}
          onCheck={() => this.handleChangeValueCheckBox(1)}
          valueCheck={this.state.valueCheckBox.firstCheck}
        />
        <CustomTextInput
          onChange={(value) => this.handleChangeValueInput( 2, value)}
          onCheck={() => this.handleChangeValueCheckBox(2)}
          valueCheck={this.state.valueCheckBox.secondCheck}
        />
        <CustomTextInput
          onChange={(value) => this.handleChangeValueInput( 3, value)}
          onCheck={() => this.handleChangeValueCheckBox(3)}
          valueCheck={this.state.valueCheckBox.threeCheck}
        />

        {/* Button Action */}
        <View style={styles.cardButton}>
          <CustomButton
            text="+"
            onPress={() => this.handleAction(1)}
          />

          <CustomButton
            text="-"
            onPress={() => this.handleAction(2)}
          />

          <CustomButton
            text="x"
            onPress={() => this.handleAction(3)}
          />

          <CustomButton
            text="/"
            onPress={() => this.handleAction(4)}
          />
        </View>

        {/* Result */}
        <View style={styles.cardResult}>
          <Text style={styles.result}>Hasil : </Text>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>

      </View>
    )
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontFamily: 'monospace',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  cardButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: .6,
    borderBottomColor: '#141414',
  },
  cardResult : {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'monospace'
  }
})
