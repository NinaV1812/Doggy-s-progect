import React, {useState} from "react"

const UploadImage = () => {
    const [picture, setPucture] = useState({file: '',imagePreviewUrl: ''})
   const handleSubmit= (e) => {
        e.preventDefault();
        console.log('handle uploading-', picture.file );
      }

      const handleImageChange= (e) =>  {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          setPucture({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
      
      let {imagePreviewUrl} = picture;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt={picture.file}/>);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
    return (
<div className="previewComponent">
    
    <h1>Nina</h1>
    <form  onSubmit={(e)=>handleSubmit(e)}>
    <input 
    type="file"
    multiple="false"
    onChange={(e)=>handleImageChange(e)}
    />
    </form>
    <button
    className="submitButton" 
            type="submit"
            >Submit Button
            </button>

    <div className="imgPreview">
          {$imagePreview}    </div>
          </div>
    )
}
export default UploadImage;