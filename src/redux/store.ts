import reducer, {initialStateType} from './reducer';
import {createStore} from 'redux';

export interface RootState extends initialStateType {}

export default function configureStore() {
  const store = createStore<RootState, any, any, any>(reducer);
  return store;
}
