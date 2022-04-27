import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider as ReduxProvider} from 'react-redux';  //react-redux
import { store } from './Redux/store'; //js
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
  </React.StrictMode>
)

//now react know abpout store but provider do'nt know about store so we have to pass a key
{/* connecting react with redux */}