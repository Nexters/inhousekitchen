import { action, createFetchTypes } from './actionHelper';
import { FAILURE, FETCH, SUCCESS } from './constants';
import { fetchEntity } from '../sagas/sagaHelper';
import agent from './agent';

export const COUNTER = createFetchTypes('COUNTER');
const fetchData = {
  fetch: () => action(COUNTER[FETCH], { loading: true }),
  success: response => action(COUNTER[SUCCESS], { loading: false, loaded: true, counter: response }),
  failure: error => action(COUNTER[FAILURE], { loading: false, loaded: false, error })
};

export const fetchCounter = fetchEntity(fetchData, agent.Counter.getCounter);
