/* @flow */

/**
|--------------------------------------------------
| Author: Antonio Moreno Valls
| Organization: APSL
|--------------------------------------------------
*/

import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  ScrollView,
  ActionSheetIOS,
  PixelRatio,
  View
} from 'react-native'

import Modal from 'react-native-modalbox'

type Props = {
  styleContainer?: Object,
  coverScreen?: boolean,
  backButtonEnabled?: boolean,
  height?: number,
  title: string,
  options: Array<Object>,
  refs: Function,
  fontFamily?: string,
  titleFontFamily?: string,
  isOpen?: boolean,
  cancelButtonIndex?: number,
  itemDivider?: number
}
type State = void

class BottomSheet extends React.PureComponent<Props, State> {
  static PropTypes = {
    styleContainer: PropTypes.object,
    coverScreen: PropTypes.bool,
    backButtonEnabled: PropTypes.bool,
    height: PropTypes.number,
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    refs: PropTypes.func.isRequired,
    fontFamily: PropTypes.string,
    titleFontFamily: PropTypes.string,
    isOpen: PropTypes.bool,
    cancelButtonIndex: PropTypes.number,
    itemDivider: PropTypes.number
  }

  renderOption = (options: Array<Object>) => {
    return options.map((item, index) => {
      return (
        <View style={{ flexDirection: 'column' }} key={index}>
          <TouchableNativeFeedback
            onPress={item.onPress}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.item}>
              {item.icon}
              <Text style={[styles.text, { fontFamily: this.props.fontFamily }]}>
                {item.title}
              </Text>
            </View>
          </TouchableNativeFeedback>
          {this.props.itemDivider === index + 1 ? (
            <View style={styles.separator} />
          ) : null}
        </View>
      )
    })
  }

  render() {
    if (Platform.OS !== 'android') {
      console.warn('Bottom Sheet is only available on Android.')
      return null
    }
    return (
      <Modal
        style={[this.props.styleContainer, { height: this.props.height }]}
        backButtonClose={this.props.backButtonEnabled}
        position="bottom"
        isOpen={this.props.isOpen}
        ref={this.props.refs}
        coverScreen={this.props.coverScreen}
      >
        <ScrollView style={styles.modal}>
          <Text
            style={[styles.title, { fontFamily: this.props.titleFontFamily }]}
          >
            {this.props.title}
          </Text>
          {this.renderOption(this.props.options)}
        </ScrollView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 32,
    fontFamily: 'Roboto',
    textAlignVertical: 'center',
    color: '#000',
    opacity: 0.87
  },
  item: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    height: 42,
    color: '#000',
    opacity: 0.54,
    marginLeft: 16
  },
  modal: {
    marginTop: 16
  },
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#CCCCCC',
    marginTop: 7,
    marginBottom: 8,
    width: '100%'
  }
})

export default BottomSheet
