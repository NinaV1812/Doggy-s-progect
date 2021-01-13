import {BREED_RESULT} from "./action"
const initialState = [];
  
  export default function reducer(state = initialState, action) {
    // console.log("action payload", action.payload)
    switch (action.type) {
        case BREED_RESULT: {
          // console.log("payload in reducer", action.payload)
            return (
                action.payload.map((dogsData)=> {
                  return (
                    dogsData.className
                  )
                })  
            )}
      default: {
        return state;
      }
    }
  }
  