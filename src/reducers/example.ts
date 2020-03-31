import * as actionTypes from '../actions/types/example';

export interface IExampleReducer {
    exampleState: string;
}

const defaultState = (): IExampleReducer => ({
    exampleState: undefined
});

export default (state = defaultState(), action: any): IExampleReducer => {
    switch (action.type) {
        case actionTypes.EXAMPLE_ACTIONS: {
            return {
                ...state,
                exampleState: action.text
            };
        }
        default: {
            return state;
        }
    }
};