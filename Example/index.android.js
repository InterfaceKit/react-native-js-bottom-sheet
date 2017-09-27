/* @flow */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import BottomSheet from 'react-native-js-bottom-sheet'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Example extends Component {
  _onPressButton = () => {
    this.bottomSheet.open()
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Open Bottom Sheet" onPress={this._onPressButton} />
        <BottomSheet
          refs={(ref: BottomSheet) => {
            this.bottomSheet = ref
          }}
          coverScreen={false}
          title="Open with" // title displayed in top of list
          options={[
            {
              title: 'WhatsApp',
              icon: (
                <MaterialCommunityIcons
                  name="whatsapp"
                  color="green"
                  size={24} // icon size specified by google
                />
              ),
              onPress: () => {
                console.log('Open WhatsApp')
              }
            },
            {
              title: 'Telegram',
              icon: (
                <MaterialCommunityIcons name="telegram" color="blue" size={24} />
              ),
              onPress: () => {
                console.log('Open Telegram')
              }
            },
            {
              title: 'Hangouts',
              icon: (
                <MaterialCommunityIcons
                  name="hangouts"
                  color="green"
                  size={24}
                />
              ),
              onPress: () => null
            },
            {
              title: 'Snapchat',
              icon: (
                <MaterialCommunityIcons
                  name="snapchat"
                  color="yellow"
                  size={24}
                />
              ),
              onPress: () => null
            },
            {
              title: 'Skype',
              icon: (
                <MaterialCommunityIcons name="skype" color="blue" size={24} />
              ),
              onPress: () => null
            }
          ]}
          fontFamily="Avenir" // fontFamily used to display values.
          isOpen={false} // specifies if bottom sheet is open by default. Default: false
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
})

AppRegistry.registerComponent('Example', () => Example)
