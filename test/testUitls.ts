import { ShallowWrapper } from "enzyme";
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param val - Value of data-tet attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
    return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducers.
 * @function storeFactory
 * @param initialState - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState: any) => {
    console.log('InitialState2', initialState);
    return createStore(rootReducer, initialState);
}