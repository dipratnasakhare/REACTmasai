import "./App.css";
import Option from "./Components/Option";
import Booklet from "./Components/Booklet";
import { useState } from "react";



function App() {

const [bool, setbool] = useState(false)

 const showQuetions = () => {
  setbool(!bool)
 }


  return <div className="App">{/* import Booklet component here */}
  
 
  {!bool ? <Option showQuetions={showQuetions} /> :  <Booklet />}
  </div>;
}

export default App;
