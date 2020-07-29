import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Thunk1 from './Redux/Thunk';


const initialValue = {
  loading : false,
  data: [],
  error: ''
}

// Reducer
const funReducer = (state=initialValue, actions) => {
  switch (actions.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        loading: false,
        data: actions.payload,     
        error: ''  
      }
    case 'LOGIN_FAIL':
      return {
        loading: false,
        data: [],
        error: actions.error
      }	
    default:
      return {
        ...state
      }
  }
}
 
// Store
let store = createStore(funReducer, applyMiddleware(thunk));
// store.subscribe(() =>  {console.log(store.getState())}); // GET DATA IN STORE

const Thunk = () => {
    return (
      <div>
         {/* We Can Access this Store in all components given between Provider */}
        <Provider store={store}>
          <Thunk1 />
        </Provider>
      </div>
    );
}

export default Thunk;
