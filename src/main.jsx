import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex items-center justify-center min-h-screen bg-amber-950'>
    <App />
    </div>
  </StrictMode>,
)
