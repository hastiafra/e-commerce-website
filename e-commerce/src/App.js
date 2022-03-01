import "./App.css";
import {Routes, Route } from "react-router-dom";

import Home from "./pages/homepage/Home";
import Shop from "./pages/shopPage/Shop";
import Header from "./components/header/Header";


function App() {
  return (<>
  <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:titleId" element={<Shop />} />
        </Routes>
        </>
  
  );
}

export default App;
