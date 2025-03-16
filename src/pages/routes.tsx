import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Footer } from '../components/html-element-reference/semantic-elements/footer/footer'
import { Header } from '../components/html-element-reference/semantic-elements/header/header'
import { AboutPage } from './about-page'
import { ErrorPage } from './error-page'
import { HomePage } from './home-page'
import { TodoApp } from './todo-app-page'
import { WatchesApp } from './watch-app-page'
import { WeatherApi } from './weather-app-page'

export const Routing = () => {
  return (
    <Router>
      <Header />

      <Routes >
        <Route path="/" element={< HomePage />} />
        <Route path="/watch" element={< WatchesApp />} />
        <Route path="/todo" element={< TodoApp />} />
        <Route path="/weather" element={< WeatherApi />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path=":param" element={<ErrorPage />} />
        <Route path="*" element={< ErrorPage />} />
      </Routes>

      <Footer />

    </Router >)
}