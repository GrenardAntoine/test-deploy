import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BenchmarkPage } from './pages/benchmark/benchmark-page'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BenchmarkPage/>
  </React.StrictMode>
)
