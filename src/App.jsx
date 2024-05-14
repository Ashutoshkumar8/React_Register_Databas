import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./component/Registation";
import Login from "./component/Login";
import Home from "./component/Home";


const App=()=>{

  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="reg" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>

        
      </Route>
    </Routes>
    </BrowserRouter>
  
    </div>
  )
}
export default App;