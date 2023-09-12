import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { logoArray } from "./pages/Home/data";
import { Login, Home, Layout, About } from "./pages/index";
import NotFound from "./pages/404/404";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home data={logoArray} />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
