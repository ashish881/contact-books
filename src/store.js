import {compose,applyMiddleware,createStore,combineReducers} from "redux";
import thunk from "redux-thunk";
import addreducer from "./reducers/addreducer"

// const localState = {
//     contact:{
//         contacts: localStorage.getItem('contact') ?  JSON.parse(localStorage.getItem('contact')): [],
    
//     }
// };

const reducer = combineReducers({
    contact:addreducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

 export default store;