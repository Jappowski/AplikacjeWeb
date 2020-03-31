import { combineReducers } from 'redux';

import example, { IExampleReducer } from './example';

export default combineReducers({
    example
});

export interface IState {
    example: IExampleReducer;
}