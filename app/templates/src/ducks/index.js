import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// reducer
import count from './count'
import data from './data'

const rootReducer = combineReducers({
    count,
    data
})

let store = null
if (__DEV__) {          // 开发环境
    store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    )
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
}

export default store