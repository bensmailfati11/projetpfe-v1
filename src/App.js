import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './pages/Users.jsx';
import Groupes from './pages/Groupes.jsx';
import Planings from './pages/Planings.jsx';
import Codes from './pages/Codes.jsx';

const App=()=> {

  return (
    <div > 
      <Header className="header"/>
      <div>
    <BrowserRouter>
    <Sidebar>
      <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Groupes" element={<Groupes />} />
      <Route path="/Planings" element={<Planings />} />
      <Route path="/Codes" element={<Codes />} />
      </Routes>
      </Sidebar>
      </BrowserRouter>
      </div>
      <Footer/>
      </div>
    
  );
}

export default App;
