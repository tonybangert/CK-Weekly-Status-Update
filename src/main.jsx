import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClientStatusReport from './ClientStatusReport.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClientStatusReport />
  </StrictMode>,
)
