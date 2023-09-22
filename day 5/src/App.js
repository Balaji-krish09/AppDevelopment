import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App';
import Login from './pages/Login';
import './App.css';
import { Register } from './pages/Register';
import Main from './pages/Main'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={< Login />} />
          <Route path='/Login' index element={< Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/main' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
