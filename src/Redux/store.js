

import {legacy_createStore as createStore} from 'redux'

import { todoReducer } from './reducer'

//store take reducer and initial state

export const store=createStore(todoReducer,{todos:[]})

// store.subscribe(()=>{
//     console.log("Subscribe:",store.getState());
// })


//react-reduc-----(middleware)