import React, { useState } from "react";

const UploadImage = () => {
  const [picture, setPucture] = useState({ file: "", imagePreviewUrl: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle uploading-", picture.file);
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
    $imagePreview = 
    <div class="img-fluid img-thumbnail">
    <img src={imagePreviewUrl} alt={picture.file} />
    </div>
  } else {
    $imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }
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
            onChange={(e) => handleImageChange(e)}
          ></input>
          <button
            class="btn btn-success"
            type="button"
            id="inputGroupFileAddon04"
          >
            Button
          </button>
          </div>
        </form>
      </div>
      <div class="d-flex justify-content-center">{$imagePreview} </div>
      </div>
  );
};
export default UploadImage;
