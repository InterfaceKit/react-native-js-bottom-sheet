/* @flow */

import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  ScrollView,
  PixelRatio,
  View
} from 'react-native'
import Modal from 'react-native-modalbox'

type Props = {
  styleContainer?: Object,
  coverScreen?: boolean,
  backButtonEnabled?: boolean,
  height?: number,
  title?: string,
  options: Array<Object>,
  fontFamily?: string,
  titleFontFamily?: string,
  isOpen?: boolean,
  cancelButtonIndex?: number,
  itemDivider?: number
}

class BottomSheet extends React.PureComponent<Props> {
  bottomSheet: Modal

  static propTypes = {
    styleContainer: PropTypes.object,
    coverScreen: PropTypes.bool,
    backButtonEnabled: PropTypes.bool,
    height: PropTypes.number,
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
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
            background={TouchableNativeFeedback.SelectableBackground()}>
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

  /**
   * Open the BottomSheet
   */
  open() {
    this.bottomSheet.open()
  }

  /**
   * Close the BottomSheet
   */
  close() {
    this.bottomSheet.close()
  }

  renderTitle = () => {
    if (!this.props.title) {
      return
    }
    return (
      <Text style={[styles.title, { fontFamily: this.props.titleFontFamily }]}>
        {this.props.title}
      </Text>
    )
  }

  render() {
    if (Platform.OS !== 'android') {
      console.warn('Bottom Sheet is only available on Android.')
      return null
    }
    return (
      <Modal
        ref={(ref: any) => {
          this.bottomSheet = ref
        }}
        style={[this.props.styleContainer, { height: this.props.height }]}
        backButtonClose={this.props.backButtonEnabled}
        position="bottom"
        isOpen={this.props.isOpen}
        coverScreen={this.props.coverScreen}>
        <ScrollView style={styles.modal}>
          {this.renderTitle()}
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
