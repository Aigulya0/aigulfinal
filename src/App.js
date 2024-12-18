import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Cart from "./components/Cart";
import NotFound from "./components/notFound";

function App() {

  return (
  <main>
  <Router basename={process.env.PUBLIC_URL}>
  <ToastContainer />

    <Navbar />
    <Routes>
    <Route path="/cart" exact element={<Cart/>} />
    <Route path="/" exact element={<Home />}/>
    <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

  </main>);
}
export default App;
