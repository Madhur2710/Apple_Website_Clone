import "./App.css";

import { BrowserRouter,Route, Routes } from "react-router-dom";
import IndexNavbar from "./pages/index_navbar";
import LoginPage from "./pages/login_page"; 



function App() {
  // window.addEventListener('resize',()=>{
  //   console.log(window.screen.width);
  // }) 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route index element={<IndexNavbar/>} />
        <Route path="/home" element={<IndexNavbar/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
