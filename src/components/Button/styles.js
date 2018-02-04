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
  }
};

export default EStyleSheet.create({
  ...styleObjects.detail
});
