import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import About from "./components/about/About";
import { Home } from "./components/home/Home";
import ProductServices from "./components/productServicies/ProductServices";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<ProductServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
