import React from 'react-native';
import RNDateRangePicker from './';

const {RNDateRangePickerIOS} = RNDateRangePicker;
const {AppRegistry, StyleSheet, Text, View,} = React;

class RNDateRangePickerDemo extends React.Component {
  constructor() {
    super();

    const month = (new Date()).getMonth();
    const afterDate = new Date();
    afterDate.setMonth(month + 2);
    const beforeDate = new Date();
    beforeDate.setMonth(month);

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    this.state = {
      selected: {
        startDate: today,
        endDate: tomorrow,
      },
      unavailable: {
        beforeDate: beforeDate,
        afterDate: afterDate,
      }
    };
  }

  _handleOnSelected = (startDate, endDate) => {

  };

  _handleOnClose = (startDate, endDate) => {

  };

  render() {
    return (
      <View style={styles.container}>
        <RNDateRangePickerIOS
          selected={this.state.selected}
          unavailable={this.state.unavailable}
          onSelected={this._handleOnSelected}
          onClose={this._handleOnClose}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('RNDateRangePickerDemo', () => RNDateRangePickerDemo);
