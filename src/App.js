import { Route,Routes } from 'react-router-dom'
import Directs from './pages/directs';
import Explore from './pages/explore';
import Home from './pages/home';
import Profile from './pages/profile';
import Tagged from './pages/profile/tagged';
import Saved from './pages/profile/saved';

import Setting from './pages/setting';
// import Navbar from './components/navbar';

import SignUp from './pages/Sign/SignUp'
import PasswdReset from './pages/Sign/forgotPasswd';


import { useContext } from "react";
import { userContext } from "./helper/context";
import IndexReg from './pages/Sign';

function App() {
  const [isSinged , setIsSigned] = useContext(userContext)
  if(isSinged){
    return (

      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/saved' element={<Saved/>} />
        <Route path='/profile/tagged' element={<Tagged/>} />


        <Route path='/directs/inbox' element={<Directs/>} />

        <Route path='/explore' element={<Explore/>} />

        <Route path='/setting' element={<Setting/>} />

      </Routes>

  );
  }
  else {
    return(
        <Routes>
          <Route path='/' element={<IndexReg/>} />
          <Route path='/sign/signup' element={<SignUp/>} />
          <Route path='/sign/reset-password' element={<PasswdReset/>} />
        </Routes>
      )
    }
}

export default App;
