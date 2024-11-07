import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <main className='bg-neutral-950 text-white min-h-screen'>
      <App />
    </main>
  </BrowserRouter>
)
