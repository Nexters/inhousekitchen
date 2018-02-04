import EStyleSheet from 'react-native-extended-stylesheet';

const styleObjects = {
  detail: {
    requestBook: {
      width: 154,
      height: 36,
      backgroundColor: '#fff',
      alignSelf: 'flex-start'
    },
    requestBookText: {
      color: '$firstColor'
    },
    requestBookArrow: {
      color: '$firstColor'
    }
  },
  guestMode: {
    guestMode: {
      width: 134,
      borderWidth: 1,
      borderColor: '$fourthColor',
      backgroundColor: '#fff'
    },
    guestModeText: {
      color: '$fourthColor'
    },
    guestModeArrow: {
      color: '$fourthColor'
    }
  }
};

export default EStyleSheet.create({
  ...styleObjects.detail,
  ...styleObjects.guestMode
});
