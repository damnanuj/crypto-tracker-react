import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element ={<HomePage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='*' element={<p>Wrong Route</p>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
