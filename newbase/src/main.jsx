import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reference/index.css'
import MyApp from './MyApp.tsx'

console.log("test")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
