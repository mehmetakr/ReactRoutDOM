import Aboute from "./pages/Aboute";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Header from "./Components/Header";
import Singleproduct from "./pages/Singleproducts";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboute" element={<Aboute/>} />
          <Route path="products" element={<Products/>} />
          <Route path="products/:productId" element={<Singleproduct/>} />
          <Route path="posts" element={<Posts/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
