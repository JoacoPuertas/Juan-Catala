import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Reels from './pages/Reels'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/work" />} />
        <Route path="reels" element={<Reels />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
