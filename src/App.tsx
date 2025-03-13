import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { ErrorPage } from './pages/error'
import { HomePage } from './pages/home'
import { TodoApp } from './pages/todo-app'
import { WatchesApp } from './pages/watch-app'
import { WeatherApi } from './pages/weather-app'

export const App = () => {
  return (<Router>
    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/watch" element={< WatchesApp />} />
      <Route path="/todo" element={< TodoApp />} />
      <Route path="/weather" element={< WeatherApi />} />
      <Route path=":param" element={<ErrorPage />} />
      <Route path="*" element={< ErrorPage />} />
    </Routes>
  </Router>)
}