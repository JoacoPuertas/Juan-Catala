import { Routes, Route } from 'react-router-dom';
import Work from './components/Work';
import Reels from './components/Reels';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Work />} />
      <Route path="/reels" element={<Reels />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
