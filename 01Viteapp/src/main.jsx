import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const areactElement=React.createElement(
    'h1',
    {style:{color:'red'}},
    'Hello World',
    " Subhan"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <App />
   
  
)
