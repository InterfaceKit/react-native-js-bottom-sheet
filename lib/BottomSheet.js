/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  StyleSheet,
  PixelRatio,
  View
} from 'react-native';
import Modal from 'react-native-modalbox';

type Props = {
  styleContainer?: Object,
  coverScreen?: boolean,
  backButtonEnabled?: boolean,
  height?: number,
  title?: string,
  options?: Array<Object>,
  fontFamily?: string,
  titleFontFamily?: string,
  isOpen?: boolean,
  cancelButtonIndex?: number,
  itemDivider?: number,
  contentStyle?: any,
  children: any
};

class BottomSheet extends React.PureComponent<Props> {
  bottomSheet: Modal;

  static propTypes = {
    styleContainer: PropTypes.object,
    coverScreen: PropTypes.bool,
    backButtonEnabled: PropTypes.bool,
    height: PropTypes.number,
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    fontFamily: PropTypes.string,
    titleFontFamily: PropTypes.string,
    isOpen: PropTypes.bool,
    cancelButtonIndex: PropTypes.number,
    itemDivider: PropTypes.number,
    contentStyle: PropTypes.object
  };

  /**
   * Open the BottomSheet
   */
  open() {
    this.bottomSheet.open();
  }

  /**
   * Close the BottomSheet
   */
  close() {
    this.bottomSheet.close();
  }

  /**
   * Renders content based on the options or children
   * @returns {*}
   */
  renderContent() {
    const {
      options,
      title,
      children,
      fontFamily,
      itemDivider,
      titleFontFamily
    } = this.props;

    if (options && options.length) {
      title && (
        <Text
          style={[
            styles.title,
            {
              fontFamily: titleFontFamily
            }
          ]}>
          {title}
        </Text>
      );
      return options.map(
        (
          item: {
            onPress: Function,
            icon: any,
            title: string
          },
          index: number
        ) => {
          return (
            <View
              style={{
                flexDirection: 'column'
              }}
              key={index}>
              {Platform.OS === 'android' ? (
                <TouchableNativeFeedback
                  onPress={item.onPress}
                  background={TouchableNativeFeedback.SelectableBackground()}>
                  <View style={styles.item}>
                    {item.icon}
                    <Text
                      style={[
                        styles.text,
                        {
                          fontFamily: fontFamily
                        }
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              ) : (
                <TouchableHighlight
                  onPress={item.onPress}
                  underlayColor="#F5F5F5">
                  <View style={styles.item}>
                    {item.icon}
                    <Text
                      style={[
                        styles.text,
                        {
                          fontFamily: fontFamily
                        }
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableHighlight>
              )}
              {itemDivider === index + 1 && <View style={styles.separator} />}
            </View>
          );
        }
      );
    }
    return children;
  }

  render() {
    const {
      height,
      backButtonEnabled,
      isOpen,
      coverScreen,
      contentStyle,
      styleContainer
    } = this.props;
    return (
      <Modal
        ref={(ref: any) => {
          this.bottomSheet = ref;
        }}
        style={[
          styleContainer,
          {
            height: height
          }
        ]}
        backButtonClose={backButtonEnabled}
        position="bottom"
        isOpen={isOpen}
        coverScreen={coverScreen}>
        <View style={[styles.modal, contentStyle]}>{this.renderContent()}</View>
      </Modal>
    );
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
});

export default BottomSheet;
