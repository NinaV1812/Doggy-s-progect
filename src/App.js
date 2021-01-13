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
    <div>
    <UploadImage/>
</div>
<div>
  <DogsLayout/>
  </div>
    </div>

)
}

export default App;
