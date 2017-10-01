/* @flow */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import BottomSheet from 'react-native-js-bottom-sheet'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

export default class Example extends Component {
  bottomSheet: BottomSheet

  _onPressButton = () => {
    this.bottomSheet.open()
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Open" onPress={this._onPressButton} />
        <BottomSheet
          refs={(ref: BottomSheet) => {
            this.bottomSheet = ref
          }}
          itemDivider={3}
          backButtonEnabled={true}
          coverScreen={false}
          title="Create"
          options={[
            {
              title: 'Document',
              icon: (
                <MaterialCommunityIcons
                  name="file-document-box"
                  color="#2186fa"
                  size={24}
                />
              ),
              onPress: () => null
            },
            {
              title: 'Spreadsheet',
              icon: <Entypo name="spreadsheet" color="#43a047" size={24} />,
              onPress: () => null
            },
            {
              title: 'Folder',
              icon: (
                <MaterialCommunityIcons name="folder" color="grey" size={24} />
              ),
              onPress: () => null
            },
            {
              title: 'Upload photos or videos',
              icon: (
                <MaterialCommunityIcons
                  name="cloud-upload"
                  color="grey"
                  size={24}
                />
              ),
              onPress: () => null
            },
            {
              title: 'Use Camera',
              icon: (
                <MaterialCommunityIcons name="camera" color="grey" size={24} />
              ),
              onPress: () => null
            }
          ]}
          isOpen={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('Example', () => Example)
