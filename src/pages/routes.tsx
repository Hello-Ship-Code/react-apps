import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { ErrorPage } from './error'
import { HomePage } from './home'
import { TodoApp } from './todo-app'
import { WatchesApp } from './watch-app'
import { WeatherApi } from './weather-app'

export const Routing = () => {
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