import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { logoArray } from "./pages/Home/data";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home data={logoArray} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
