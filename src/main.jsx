import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/fonts/fonts.scss'
import './assets/_normalize.scss'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<div className="wrapper">
    	<App />
	</div>
  </React.StrictMode>,
)
