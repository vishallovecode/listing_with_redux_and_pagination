import { createStore } from 'redux'
 import cakeReducer from './actions/Reducer'

 

const store = createStore(
    cakeReducer
)

export default store