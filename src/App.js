
import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <div >
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/service" element={<Service/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
    </div>
    
  );
}

export default App;
