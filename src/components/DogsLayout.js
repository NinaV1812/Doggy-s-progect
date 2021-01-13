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
  const [hasMore, setHasMore] = useState(true);
  const param = breedy[0]
    ? breedy[0].split(" ")[0].replace(",", "").toLowerCase()
    : "beagle";

  const [items, setItems] = useState({
    items: Array.from({ length: 20 }),
    hasMore: true,
  });
  console.log("breed in dogs layout", breedy);
  console.log("param ", param);

  useEffect(() => {
    const fetchData = async () => {
      console.log("param in useeffect ", param);

      const result = await axios(`https://dog.ceo/api/breed/${param}/images`);

      const myFiveteenDogs = result.data.message.slice(0, 17);

      setDodsPictures(myFiveteenDogs);
      //   console.log("result", result.data.message);
      console.log("myFiveteenDogs", dogsPictures);
      // console.log("breed in dogs layout", breedy)
    };

    fetchData();
  }, [param]);

  const clichHandel = async () => {
    const result = await axios(`https://dog.ceo/api/breed/${param}/images`);

    const myFiveteenDogs = result.data.message.slice(0, 16);

    setDodsPictures(myFiveteenDogs);
    setHasMore(false);
    //   console.log("result", result.data.message);
    console.log("mynewFiveteenDogs", dogsPictures);
  };

  if (breedy[0]) {
    return (
      <div  id="backGround">

      <InfiniteScroll
        dataLength={dogsPictures.length} //This is important field to render the next data
        next={clichHandel}
        // hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
          <div>
            {/* <button onClick={clichHandel}>Show me more dogs</button> */}
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
                  data-wow-delay="0.5s"
                />
              );
            })}
          </div>
      </InfiniteScroll>
      </div>

    );
  } else {
    return (
      <div id="whateSpace">
        {" "}
        {/* <p>Loading</p> */}
        {/* <button onClick={clichHandel}>Show me more dogs</button> */}
      </div>
    );
  }
};
export default DogsLayout;
