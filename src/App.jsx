import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Canciones from './pages/canciones/canciones';
import Header from './components/header/header';


const App = () => {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/canciones' element={<Canciones/>}/>
      </Routes>
    </Router>
  )
}

export default App
