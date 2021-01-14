import React from "react";
import "./App.css";
import DogsLayout from "./components/DogsLayout";
import UploadImage from "./components/UploadAndClassify";

function App() {
  return (
    <div>
      <div>
      <UploadImage />
      </div>
      <div>
      <DogsLayout />
    </div>
    </div>
  );
}

export default App;
