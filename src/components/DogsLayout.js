import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "../styles/DogsLayout.css";
import { useSelector } from "react-redux";
import { selectBreed } from "../store/breed/selectors";
import { CompactMode } from "../components/UploadAndIdentify";

const DogsLayout = () => {
  const breed = "beagle";
  const [dogsPictures, setDodsPictures] = useState();
  const breedy = useSelector(selectBreed);
  // const {breedy} = useContext(CompactMode)
  // const { isCompact } = useContext(CompactMode);
  const param = breedy[0] ? breedy[0] : "beagle";

  const [items, setItems] = useState({
    items: Array.from({ length: 20 }),
    hasMore: true,
  });
  console.log("breed in dogs layout", breedy);

  useEffect(() => {
    const fetchData = async () => {
      console.log("param ", param);

      const result = await axios(`https://dog.ceo/api/breed/${param}/images`);

      const myFiveteenDogs = result.data.message.slice(0, 16);

      setDodsPictures(myFiveteenDogs);
      //   console.log("result", result.data.message);
      console.log("myFiveteenDogs", dogsPictures);
      // console.log("breed in dogs layout", breedy)
    };

    fetchData();
  }, []);

  const clichHandel = () => {
    const fetchData = async () => {
      const result = await axios(`https://dog.ceo/api/breed/${breed}/images`);

      const myFiveteenDogs = result.data.message.slice(0, 16);

      setDodsPictures(myFiveteenDogs);
      //   console.log("result", result.data.message);
      console.log("myFiveteenDogs", dogsPictures);
    };
    fetchData();
  };

  if (dogsPictures) {
    return (
      <div class="container">
        <div>
          <button onClick={clichHandel}>Show me more dogs</button>
        </div>
        {/* <div class="col-lg-4 col-sm-6 thumbnail"> */}
        <div id="photos">
          {dogsPictures.map((picture) => {
            return (
              <img
                class="img-responsive"
                src={picture}
                alt=""
                key={picture}
                data-wow-delay="0.3s"
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};
export default DogsLayout;
