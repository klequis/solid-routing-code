import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import RootLayout from './root-layout'
import './app.css'

export default function App() {
  return (
    <>
      <div class="filename-lg app">app.jsx</div>
      <Router root={RootLayout}>
        <FileRoutes />
      </Router>
    </>
  )
}
