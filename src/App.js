import React from "react";
import './App.css';
import  DogsLayout from "./components/DogsLayout"
import UploadAndClassify from "./components/UploadAndIdentify"
import {AddCompactModeFeature} from "../src/components/Contex"
import UploadImage from "../src/components/Uploadddd"




function App() {
return(
  // <UploadAndClassify>
  <div>
    <div>
    {/* <UploadAndClassify/> */}
    <UploadImage/>
</div>
<div>
  <DogsLayout/>
  </div>
    </div>
    // </UploadAndClassify>

)
}

export default App;
