# react-native-js-bottom-sheet
Modal bottom sheet component for Android that follows the guidelines of Material Design.

https://material.io/guidelines/components/bottom-sheets.html

![alt text](./example.png)

## Getting started
In order to work, it's necessary install first [react-native-modalbox](https://github.com/maxs15/react-native-modalbox):
```sh
$ yarn add react-native-modalbox
```
After install the dependency, you can proceed installation with:
```sh
$ yarn add react-native-js-bottom-sheet
```
## Usage
```js

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
```

## API
| Prop              | Type          | Required | Description                                                                                                              |
|-------------------|---------------|----------|--------------------------------------------------------------------------------------------------------------------------|
| coverScreen       | bool          | No       | Will use RN Modal component to cover the entire screen wherever the modal is mounted in the component hierarchy          |
| backButtonEnabled | bool          | No       | Close modal when receiving back button event                                                                             |
| height            | number        | No       | Height of the container. By default it has no height, due to container grows automatically depending of list of elements |
| title             | string        | Yes      | Title displayed in top of list                                                                                           |
| options           | Array<Object> | Yes      | Array of objects to display options list                                                                                 |
| fontFamily        | string        | No       | Used to display values. By default is Roboto                                                                             |
| titleFontFamily   | string        | No       | Title font family                                                                                                        |
| isOpen            | bool          | No       | Specifies if bottom sheet is open by default                                                                             |
| refs              | Function      | Yes      |                                                                                                                          |
| itemDivider       | number        | No       | Insert an item separator below the specified item number                                                                 |

## License
MIT License

Copyright (c) 2017 InterfaceKit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author
Antonio Moreno Valls, [APSL](https://www.apsl.net)
