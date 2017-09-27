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
  TouchableOpacity,
  Platform,
  StyleSheet,
  View,
  ActionSheetIOS
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
  cancelButtonIndex?: number
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
    cancelButtonIndex: PropTypes.number
  }

  renderOption = (options: Array<Object>) => {
    return options.map((item, index) => {
      return (
        <View style={{ flexDirection: 'row' }} key={index}>
          <TouchableOpacity style={styles.item} onPress={item.onPress}>
            {item.icon}
            <Text style={[styles.text, { fontFamily: this.props.fontFamily }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
      )
    })
  }

  render() {
    return (
      <Modal
        style={[this.props.styleContainer, { height: this.props.height }]}
        backButtonClose={this.props.backButtonEnabled}
        position="bottom"
        isOpen={this.props.isOpen}
        ref={this.props.refs}
        coverScreen={this.props.coverScreen}
      >
        <View style={styles.modal}>
          <Text
            style={[styles.title, { fontFamily: this.props.titleFontFamily }]}
          >
            {this.props.title}
          </Text>
          {this.renderOption(this.props.options)}
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 32,
    ...Platform.select({
      ios: {
        fontFamily: 'Arial'
      },
      android: {
        fontFamily: 'Roboto'
      }
    }),
    textAlignVertical: 'center',
    color: '#000',
    opacity: 0.87
  },
  item: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center'
  },
  title: {
    height: 42,
    color: '#000',
    opacity: 0.54
  },
  modal: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16
  }
})

export default BottomSheet
