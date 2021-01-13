import {useDispatch} from "react-redux"

export const BREED_RESULT = "BREED_RESULT";

export const Breed = breed => ({
    type: "BREED_RESULT",
    payload: breed,
  });
  // console.log("breed in action", breed)

  
