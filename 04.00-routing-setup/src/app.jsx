import { Router } from '@solidjs/router'
import { Suspense } from 'solid-js'
import './app.css'

export default function App() {
  return (
    <>
      <div class="filename-lg app">app.jsx</div>
      <Router
        root={(props) => (
          <Suspense>{props.children}</Suspense>
        )}
      ></Router>
    </>
  )
}
