import * as React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import List from "./pages/List";
import Data from "./pages/Data";
import Data1 from "./pages/Data1";
import Data2 from "./pages/Data2";
import Data3 from "./pages/Data3";
import Web from "./pages/web";
import Web1 from "./pages/Web1";
import Web2 from "./pages/Web2";
import Web3 from "./pages/Web3";
const App=()=>{

return( 
  <>
  
  <Router>
  <List/>

    <Routes>
  
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}>
    <Route path="/about/data" element={<Data/>}/>
    <Route path="/about/data1" element={<Data1/>}/>
    <Route path="/about/data2" element={<Data2/>}/>
    <Route path="/about/data3" element={<Data3/>}/>
  </Route>
    <Route path="/contact" element={<Contact/>}>
    <Route path="/contact/web" element={<Web/>}/>
    <Route path="/contact/web1" element={<Web1/>}/>
    <Route path="/contact/web2" element={<Web2/>}/>
    <Route path="/contact/Web3" element={<Web3/>}/>
    </Route>
    <Route path="*" element={<Error/>}/>
    
    </Routes>
    </Router>

    </>
)
}
export default App;
