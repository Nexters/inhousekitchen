import React, { Component } from 'react';
import { Calendar, CalendarList, Agenda, Arrow } from 'react-native-calendars';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EStyleSheet from 'react-native-extended-stylesheet';

class SelectCalendar extends Component {
  render() {
    return (
      <Calendar
        style={ styles.selectCalendar }
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate="2012-05-10"
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate="2020-05-30"
        // Handler which gets executed on day press. Default = undefined
        onDayPress={ day => {
          console.log('selected day', day);
        } }
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat="MMM yyyy"
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={ month => {
          console.log('month changed', month);
        } }
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={ direction => (
          <MaterialIcons name={ `keyboard-arrow-${direction}` } size={ 20 } color={ EStyleSheet.value('$secondColor') } />
        ) }
        // Do not show days of other months in month page. Default = false
        hideExtraDays
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={ 1 } />
    );
  }
}

const styles = EStyleSheet.create({
  selectCalendar: {
    flex: 0,
    backgroundColor: '$backgroundColor'
  }
});

export default SelectCalendar;
