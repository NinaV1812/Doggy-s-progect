import React, { useState, useRef, useEffect } from "react";
import { DogsClassification } from "./DogsClassification";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import { useDispatch } from "react-redux";
import { Breed } from "../store/breed/action";

// export const Breed = breed => ({
//   type: "breed/result",
//   payload: breed,
// });

const UploadImage = () => {
  tf.setBackend("cpu");
  const [picture, setPucture] = useState({ file: "", imagePreviewUrl: "" });
  const [results, setResults] = useState([]);
  const [model, setModel] = useState(null);
  const imageRef = useRef();
  const inputRef = useRef();
  const [imageURL, setImageURL] = useState(null);
  const dispatch = useDispatch();

  // const [appState, setAppstate] = ({
  //   initial: "loadingModel",
  //   loadingModel: "modelReady",
  //   modelReady: "imageReady",
  //   imageReady: "identifying",
  //   identifying: "complete",
  //   complete: "modelReady"})
  // const next = () => setAppstate(appState + 1);

  const reset = async () => {
    setResults([]);
    // next();
  };

  const loadModel = async () => {
    // next();
    const model = await mobilenet.load();
    setModel(model);
    // next();
    console.log("the model is loaded");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle uploading-", picture.file);
  };

  // const upload = () => inputRef.current.click();

  const handleUpload = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(event.target.files[0]);
      setImageURL(url);
    }
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setPucture({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  let { imagePreviewUrl } = picture;
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = (
      <div class="img-fluid img-thumbnail">
        <img src={imagePreviewUrl} alt={picture.file} />
      </div>
    );
  } else {
    $imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }

  // const actionButton = {
  //   initial: { action: loadModel, text: "Load Model" },
  //   loadingModel: { text: "Loading Model..." },
  //   modelReady: { action: upload, text: "Upload Image" },
  //   imageReady: { action: identify, text: "Identify Breed" },
  //   identifying: { text: "Identifying..." },
  //   complete: { action: reset, text: "Reset" },
  // };

  const identify = async () => {
    const results = await model.classify(imageRef.current);
    setResults(results);
    console.log("identify");
    console.log("results", results);
    dispatch(Breed(results));
  };
  useEffect(()=> {
    dispatch(Breed(results))
  })
  return (
    <div class="container">
      <h1>Nina</h1>

      <div class="row">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div class="input-group">
            <input
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              type="file"
              multiple="false"
              onChange={handleUpload}
            ></input>
            <button
              class="btn btn-success"
              type="button"
              id="inputGroupFileAddon04"
              // onClick={actionButton[appState].action || (()=> {})}
              onClick={loadModel}
            >
              loadModel
            </button>
            <button
              class="btn btn-success"
              type="button"
              id="inputGroupFileAddon04"
              // onClick={actionButton[appState].action || (()=> {})}
              onClick={identify}
            >
              identify
            </button>
          </div>
        </form>
      </div>
      <div class="d-flex justify-content-center">
      <div class="img-fluid img-thumbnail">

        <img
          class="img-responsive"
          src={imageURL}
          alt="upload-preview"
          ref={imageRef}
        />
  {/* </div> */}
        {/* {$imagePreview}  */}
      </div>
      </div>
      <ul>
        {results.map(({ className, probability }) => (
          <li key={className}>{`${className}: %${(probability * 100).toFixed(
            2
          )}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default UploadImage;
