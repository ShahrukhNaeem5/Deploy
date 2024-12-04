import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import List from './Pages/List';
import Update from './Pages/Update';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/list' element={<List/>} /> 
      <Route path="/update/:id" element={<Update />} />


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
