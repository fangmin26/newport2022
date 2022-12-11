import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./common/Layout";
import AdminMain from "./screens/admin/AdminMain";
import AdminSignin from "./screens/admin/signinSignup/AdminSignin";
import WebApp from "./screens/admin/project/WebApp";
import Web from "./screens/admin/project/Web";
import ToyPrj from "./screens/admin/toyprj/ToyPrj";
import Skillset from "./screens/admin/Skillset";
import Contact from "./screens/admin/Contact";
import Main from "./screens/mobile/Main";

function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <Layout>
        <Routes>

          {/* admin */}
          <Route path="/" element={<AdminMain />} />
          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/project/webapp" element={<WebApp />} />
          <Route path="/admin/project/web" element={<Web />} />
          <Route path="/admin/skillset" element={<Skillset />} />
          <Route path="/admin/toyprj" element={<ToyPrj />} />
          <Route path="/admin/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
