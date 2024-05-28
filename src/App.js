import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import WrongRoute from './pages/WrongRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element ={<HomePage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='*' element={<WrongRoute/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
