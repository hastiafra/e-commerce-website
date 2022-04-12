import "./App.css";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";
import SignInUp from "./pages/signInPage/SignInUp";
import Shop from "./pages/shopPage/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:titleId" element={<Shop />} />
        <Route path="/auth" element={<SignInUp />} />
      </Routes>
    </>
  );
}

export default App;
