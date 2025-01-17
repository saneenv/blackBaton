import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FullImage from './pages/FullImage';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/fullimage' element={<FullImage/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
