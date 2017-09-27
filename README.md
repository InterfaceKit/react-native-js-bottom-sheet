# react-native-js-bottom-sheet
Modal bottom sheet component for Android that follows the guidelines of Material Design.

https://material.io/guidelines/components/bottom-sheets.html
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
          title="Open with"
          options={[
            {
              title: 'WhatsApp',
              icon: (
                <MaterialCommunityIcons
                  name="whatsapp"
                  color="green"
                  size={24}
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
            }
          ]}
          fontFamily="Avenir"
          isOpen={false}
        />
      </View>
    )
  }
}
```

## API
| Prop          | Type          | Required  | | Description  |
| ------------- |:-------------:| ---------:| | ------------:|
| `styleContainer`       | `Object` | No     | | Styles for the container.     |
| `coverScreen`       | `bool`      |   No     | | Will use RN Modal component to cover the entire screen wherever the modal is mounted in the component hierarchy. |
| `backButtonEnabled`   | `bool`      | No | | Close modal when receiving back button event. |
| `height`     | `number`    | No| | Height of container. By default it has no height, due to container grows automatically depending of list of items. |
| `title`       | `string`      | Yes| | Title displayed in top of list. |
| `options` | `Array<Object>`      | Yes| | Array of Objects to display options list.|
| `fontFamily`   | `string`     |No | | fontFamily attribute used to display values. By default is Roboto. |
| `titleFontFamily`   | `string`     |No | | fontFamily attribute applied to title. |
| `isOpen`   | `bool`     |No | | Specifies if bottom sheet is open by default.|
| `refs`   | `Function`     |Yes | |  |

## License
MIT License

Copyright (c) 2017 APSL

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