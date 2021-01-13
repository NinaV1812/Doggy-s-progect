import React from "react";
import './App.css';
import  DogsLayout from "./components/DogsLayout"
import UploadAndClassify from "./components/UploadAndIdentify"
import {AddCompactModeFeature} from "../src/components/Contex"
import UploadImage from "../src/components/Uploadddd"
import { useSelector } from "react-redux";





function App() {
 

return(
  <div>
    <UploadImage/>
  <DogsLayout/>
    </div>

)
}

export default App;
