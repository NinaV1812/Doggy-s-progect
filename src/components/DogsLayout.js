import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import '../styles/DogsLayout.css'


const DogsLayout = () => {
  const [breed, setBreed] = useState("beagle");
  const [dogsPictures, setDodsPictures] = useState();
  const [items, setItems] = useState({
    items: Array.from({ length: 20 }),
    hasMore: true
  })

  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://dog.ceo/api/breed/${breed}/images`);

      const myFiveteenDogs = result.data.message.slice(0, 16);

      setDodsPictures(myFiveteenDogs);
      //   console.log("result", result.data.message);
      console.log("myFiveteenDogs", dogsPictures);
    };

    fetchData();
  }, []);

//   const BlaBla =()=> {
//     useEffect(() => {
//         const fetchData = async () => {
//             if (items.length >= 100) {
//                 setItems({ hasMore: false });
//                 return;
//             }
//           const result = await axios(`https://dog.ceo/api/breed/${breed}/images`);
        
    
//           const myFiveteenDogs = result.data.message.slice(0, 16);
//           setTimeout(() => {
//           setDodsPictures(myFiveteenDogs);
//           //   console.log("result", result.data.message);
//           console.log("myFiveteenDogs", dogsPictures);
//         }, 500)
//         }
//         fetchData();
//       }, []);
//   }



  
  if (dogsPictures) {
    return (
        <div class="">
     

            {dogsPictures.map((picture) => {
              return (
                <div class="container">

                <div class="row match-to-row">
                <div class="col-lg-4 col-sm-6">
                <div class="thumbnail">
                <img
                    class="img-responsive"
                  src={picture}
                  alt={picture}
                  key={picture}
                />
                </div>
                 </div>
             </div>
      </div>
       
              );
            })}
           
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};
export default DogsLayout;
