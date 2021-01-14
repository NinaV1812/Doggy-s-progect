import React, { useState, useRef, useEffect } from "react";
import { DogsClassification } from "./DogsClassification";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import { useDispatch } from "react-redux";
import { Breed } from "../store/breed/action";
import "../styles/UploadAndIdenfiry.css";


const UploadImage = () => {
  tf.setBackend("cpu");
  const [picture, setPucture] = useState({ file: "", imagePreviewUrl: "" });
  const [results, setResults] = useState([]);
  const [model, setModel] = useState(null);
  const imageRef = useRef();
  const inputRef = useRef();
  const [imageURL, setImageURL] = useState(null);
  const [displayInput, setDisplayInput] = useState(false);
  const dispatch = useDispatch();


  const loadModel = async () => {
    const model = await mobilenet.load();
    setModel(model);
    console.log("the model is loaded");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle uploading-", picture.file);
  };

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

  const identify = async () => {
    const results = await model.classify(imageRef.current);
    setResults(results);
    console.log("identify");
    console.log("results", results);
    dispatch(Breed(results));
  };
  useEffect(() => {
    dispatch(Breed(results));
  });

  const combineFunction = () => {
    loadModel();
    setDisplayInput(true);
  };
  return (
    <div id="top">
      <div class="landing-text">
        <div class="space">
        <h1>Geting Started</h1>
        <h3>Classify your dog</h3>
        <button
          class="btn btn-light btn-lg"
          type="button"
          id="inputGroupFileAddon04"
          onClick={combineFunction}
        >
          Press To start
        </button>
        </div>
        <div class="padding">
          <div class="container">
            <div class="row">
              <form onSubmit={(e) => handleSubmit(e)}>
                {displayInput === true ? (
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
                    {imageURL ? (
                      <button
                        class="btn btn-success"
                        type="button"
                        id="inputGroupFileAddon04"
                        onClick={identify}
                      >
                        Classify breed
                      </button>
                    ) : null}
                  </div>
                ) : null}
              </form>

              {displayInput === true ? (
                <div class="d-flex justify-content-center">
                  <div class="img-fluid img-thumbnail">
                    <img
                      class="img-responsive"
                      src={imageURL}
                      alt="upload-preview"
                      ref={imageRef}
                    />
                  </div>
                </div>
              ) : null}
              <div>
                <ul className="list">
                  {results.map(({ className, probability }) => (
                    <li key={className}>{`${className}: %${(
                      probability * 100
                    ).toFixed(2)}`}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadImage;
