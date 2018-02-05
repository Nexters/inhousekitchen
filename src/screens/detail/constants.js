import { Dimensions } from 'react-native';
//  600
const HEADER_MAX_HEIGHT = Dimensions.get('window').height;
const HEADER_MIN_HEIGHT = 300;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE };
