import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App';
import Login from './pages/Login';
import './App.css';
import { Register } from './pages/Register';
import Main from './pages/Main';
import Schedule from './pages/Schedule';
import Start from'./pages/Start';
import Join from'./pages/Join';
import Profile from'./pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faq from './pages/Faq';
import Termsconditions from './pages/Termsconditions';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={< Login />} />
          <Route path='/Login' index element={< Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/main' element={<Main/>}/>
          <Route path ='/schedule' element={<Schedule/>}/>
          <Route path ='/start' element={<Start/>}/>
          <Route path ='/join' element={<Join/>}/>
          <Route path ='/profile' element={<Profile/>}/>
          <Route path ='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path ='/faq' element={<Faq/>}/>
          <Route path ='/termsconditions' element={<Termsconditions/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
