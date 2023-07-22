import { Partytown } from '@builder.io/partytown/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Partytown forward={['dataLayer.push']} />
    <App />
  </React.StrictMode>,
)
