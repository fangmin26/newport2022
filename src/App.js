import './App.css';
import {  HashRouter, Route, Routes, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Layout from './common/Layout';
import Signin from './screens/mobile/signinSignup/Signin';
import Findid from './screens/mobile/signinSignup/Findid';
import Findpw from './screens/mobile/signinSignup/Findpw';
import Signup from './screens/mobile/signinSignup/Signup';
import Signup2 from './screens/mobile/signinSignup/Signup2';
import AdminMain from './screens/admin/AdminMain';
import AdminSignin from './screens/admin/signinSignup/AdminSignin';
import WebApp from './screens/admin/project/WebApp';
import Web from './screens/admin/project/Web';
import ToyPrj from './screens/admin/toyprj/ToyPrj';
import Skillset from './screens/admin/Skillset';
import Contact from './screens/admin/Contact';


function App() {
  return (
    <HashRouter>
      <ToastContainer/>
      <Layout>
        <Routes>
          {/* app */}
          <Route path = "/signin" element={<Signin/>}/>
          {/* <Route path = "/" element = {<Main/>}/> */}
          <Route path = "/findid" element = {<Findid/>}/>
          <Route path = "/findpw" element = {<Findpw/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/signup2" element = {<Signup2/>}/>
          {/* admin */}
          <Route path = "/" element = {<AdminSignin/>}/>
          <Route path = "/admin/main" element = {<AdminMain/>}/>
          <Route path = "/admin/signin" element = {<AdminSignin/>}/>
          <Route path = "/admin/project/webapp" element = {<WebApp/>}/>
          <Route path = "/admin/project/web" element = {<Web/>}/>   
          <Route path = "/admin/skillset" element = {<Skillset/>}/>  
          <Route path = "/admin/toyprj" element = {<ToyPrj/>}/>     
          <Route path = "/admin/contact" element = {<Contact/>}/>        
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;