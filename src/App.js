import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./common/Layout";
import AdminMain from "./screens/admin/AdminMain";
import AdminSignin from "./screens/admin/signinSignup/AdminSignin";

import Contact from "./screens/admin/Contact";
import Project from "./screens/admin/Project";
import Tags from "./screens/admin/Tags";

function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <Layout>
        <Routes>

          {/* admin */}
          <Route path="/" element={<AdminMain />} />
          {/* <Route path="/admin/signin" element={<AdminSignin />} /> */}
          <Route path="/admin/tags" element={<Tags />} />

          <Route path="/admin/project" element={<Project />} />
          {/* <Route path="/admin/webapp" element={<WebApp />} />
          <Route path="/admin/web" element={<Web />} /> */}
          <Route path="/admin/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
