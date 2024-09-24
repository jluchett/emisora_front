import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Canciones from './pages/canciones';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Canciones/>}/>
      </Routes>
    </Router>
  )
}

export default App
