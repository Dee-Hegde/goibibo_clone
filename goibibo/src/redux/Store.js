import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer"
import { BookingReducer } from "./SearchBus/BookingReducer"



const rootreducer = combineReducers({
    loginred:loginReducer,
    bookingred:BookingReducer

})

const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ));


export default store;