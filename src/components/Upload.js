// import React, { useReducer, useState, useRef } from "react";
// import { useDispatch } from "react-redux";
// import * as mobilenet from "@tensorflow-models/mobilenet";
// import * as tf from "@tensorflow/tfjs";
// import "../styles/UploadAndIdenfiry.css";
// import { createContext } from "react";


// const machine = {
//   initial: "initial",
//   states: {
//     initial: { on: { next: "loadingModel" } },
//     loadingModel: { on: { next: "modelReady" } },
//     modelReady: { on: { next: "imageReady" } },
//     imageReady: { on: { next: "identifying" }, showImage: true },
//     identifying: { on: { next: "complete" } },
//     complete: {
//       on: { next: "modelReady" },
//       showImage: true,
//       showResults: true,
//     },
//   },
// };


// export const CompactMode = createContext();

// function UploadAndClassify() {
//   tf.setBackend("cpu");
//   const [results, setResults] = useState([]);
//   const [imageURL, setImageURL] = useState(null);
//   const [model, setModel] = useState(null);
//   const imageRef = useRef();
//   const inputRef = useRef();
// //   const BreedContext = React.createContext(results);
// //   console.log("BreedContex", BreedContext)


//   const reducer = (state, event) =>
//     machine.states[state].on[event] || machine.initial;

//   const [appState, dispatch] = useReducer(reducer, machine.initial);
//   const next = () => dispatch("next");

//   const loadModel = async () => {
//     next();
//     const model = await mobilenet.load();
//     setModel(model);
//     next();
//   };

//   const identify = async () => {
//     next();
//     const results = await model.classify(imageRef.current);
//     setResults(results);

//     next();
//   };

//   const reset = async () => {
//     setResults([]);
//     next();
//   };

//   const upload = () => inputRef.current.click();

//   const handleUpload = (event) => {
//     const { files } = event.target;
//     if (files.length > 0) {
//       const url = URL.createObjectURL(event.target.files[0]);
//       setImageURL(url);
//     }
//   };

//   const actionButton = {
//     initial: { action: loadModel, text: "Load Model" },
//     loadingModel: { text: "Loading Model..." },
//     modelReady: { action: upload, text: "Upload Image" },
//     imageReady: { action: identify, text: "Identify Breed" },
//     identifying: { text: "Identifying..." },
//     complete: { action: reset, text: "Reset" },
//   };

//   const { showImage, showResults } = machine.states[appState];
//   console.log(results, "results")


//   return (

//     <div class="container">
//         {actionButton[appState].text === "Upload Image" ? 
//           <div class="row">

//         <input
//           class="form-control"
//           id="inputGroupFile04"
//           type="file"
//           accept="image/*"
//           capture="camera"
//           onChange={handleUpload}
//           ref={inputRef}
//         />
//          </div>
//          : null}

//       <div class="img-fluid img-thumbnail">
//         {showImage && (
//           <img
//             class="img-responsive"
//             src={imageURL}
//             alt="upload-preview"
//             ref={imageRef}
//           />
//         )}
//       </div>

//       {showResults && (
//         <ul>
//           {results.map(({ className, probability }) => (
//             <li key={className}>{`${className}: %${(probability * 100).toFixed(
//               2
//             )}`}</li>
//           ))}
//         </ul>
//       )}
//       <div class="row">
//         <button
//           class="btn btn-success"
//           onClick={actionButton[appState].action || (()=> {})}
//         >
//           {actionButton[appState].text}
//         </button>

//         <button
//           class="btn btn-success"
//           onClick={()=> {dispatch(results)}}
//         >
//           Click to see more dogs
//         </button>
//       </div>
//     </div>

//   );
// }

// export default UploadAndClassify;

