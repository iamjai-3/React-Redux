import React from 'react';
import { createStore } from 'redux';
import App1 from './Redux/Func_Reducer';
import CombinedReducer from './Redux/CombinedReducer';
import { Provider } from 'react-redux';
import CombreduFuncComponent from './Redux/Comb_Redu_FuncComponent';

// Selectors
const ADD = "ADD";
const DEL = "DEL";
const SUBSCRIBE = 'SUBSCRIBE';

// Actions
export const addAction = () => ({type: ADD})
export const delAction = () => ({type: DEL})
export const subscribeAction = () => ({type: SUBSCRIBE})

const initialValue = {
  data: "NO ACTION DONE",
  isSubscribed: false
}

// Reducer
const funReducer = (state=initialValue, actions) => {
  switch (actions.type) {
    case SUBSCRIBE:
      return {
        ...state,
        isSubscribed: !state.isSubscribed // Change True to False and Viceversa on Button Click.
      }
    case ADD:
      return {
        ...state,
        data: "DATA ADDED"        
      }
    case DEL:
      return {
        ...state,
        data: "DATA DELETED"
      }	
    default:
      return {
        ...state
      }
  }
}

// Store
let store = createStore(funReducer);
// store.subscribe(() =>  {console.log(store.getState())}); // GET DATA IN STORE

const App = () => {
    return (
      <div>
         {/* We Can Access this Store in all components given between Provider */}
        <Provider store={store}>
        <h1> ◀ Function Based Reducer ▶ </h1>
          <App1 />
          <br/>
          <br/>
          <h1>◀ Class Based Combined Reducer ▶</h1>
          <CombinedReducer />
          <br/>
          <br/>
          <h1>◀ Function Based Combined Reducer ▶</h1>
          <CombreduFuncComponent />
        </Provider>
      </div>
    );
}

export default App;
