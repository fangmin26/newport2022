import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './common/Layout';
import Signin from './screens/mobile/signinSignup/Signin';
import Main from './screens/mobile/Main';
import Findid from './screens/mobile/signinSignup/Findid';
import Findpw from './screens/mobile/signinSignup/Findpw';
import Signup from './screens/mobile/signinSignup/Signup';
import Signup2 from './screens/mobile/signinSignup/Signup2';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Layout>
        <Routes>
          {/* app */}
          <Route path = "/signin" element={<Signin/>}/>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/findid" element = {<Findid/>}/>
          <Route path = "/findpw" element = {<Findpw/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/signup2" element = {<Signup2/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
