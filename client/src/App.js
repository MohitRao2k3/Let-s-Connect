import './App.css';
import {BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import './style.scss';
import {useContext} from 'react';
import {AuthContext} from './context/AuthContext.js';

function App(){
  const {currentUser}=useContext(AuthContext);

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />;
    }

    return children;
  }

  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'> 
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;