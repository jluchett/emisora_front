import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Canciones from './pages/canciones/canciones';
import Header from './components/header/header';
import Footer from './components/footer/footer';


const App = () => {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/canciones' element={<Canciones/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
