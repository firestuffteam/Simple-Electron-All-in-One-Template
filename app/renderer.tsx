import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/lib/window'
import '@/lib/window/window.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowContextProvider titlebar={{ title: 'Electron + Vite + React + TypeScript + TailwindCSS + ShadcnUI Template! (click Alt to show menu)', icon: appIcon, menuItems, titleCentered: true}}>
      <App />
    </WindowContextProvider>
  </React.StrictMode>
)
