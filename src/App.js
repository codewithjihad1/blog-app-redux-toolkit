import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:blogId" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
