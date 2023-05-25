import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Posts from "./Components/Posts";
import Detail from "./Components/Detail";
import Create from "./Components/Create";
import Footer from "./Components/Footer";


function App(){
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/read/:id" element={<Detail />}/>
      <Route path="/newblog" element={<Create />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
export default App;