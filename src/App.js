// import "./App.css";
import Reset from "./pages/Reset/Reset";
import Sendcode from "./pages/SendCode/Sendcode";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Verify from "./pages/Verification/Verify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <div>
    //   {/* <Signin /> */}
    //   <Signup />
    //   <Reset />
    //   <Sendcode />
    //   <Verify />
    // </div>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/code" element={<Sendcode />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
