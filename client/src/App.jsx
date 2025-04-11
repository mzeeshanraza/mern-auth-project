import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
