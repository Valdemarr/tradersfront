import CounterReducer from './counter'
import StocksReducer from './stocks'

import { combineReducers } from 'redux'

const reducers = combineReducers({
    counter: CounterReducer,
    stocks: StocksReducer
});

export default reducers;