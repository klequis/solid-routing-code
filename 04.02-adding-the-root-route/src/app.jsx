import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import './app.css'

export default function App() {
  return (
    <>
      <div class="filename-lg app">app.jsx</div>
      <Router
        root={(props) => (
          <Suspense>{props.children}</Suspense>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  )
}
