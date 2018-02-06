import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  headerContainer: {
    backgroundColor: '$backgroundColor',
    paddingLeft: '$screenPadding',
    paddingRight: 20,
    borderBottomWidth: 0,
  },
  subHeaderRightText: {
    color: '$thirdColor',
  },
});

export default styles;
