import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home2 from './pages/home/Home2';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home2 />} />
      </Routes>
    </Router>
  );
}

export default App;
