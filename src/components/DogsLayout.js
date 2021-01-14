import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { selectBreed } from "../store/breed/selectors";
import useBreedSearch from "../components/UseBreedSearch"

import "../styles/DogsLayout.css";

const DogsLayout = () => {
  const [dogsPictures, setDodsPictures] = useState();
  const breedy = useSelector(selectBreed);
  const [pageNumber, setPageNumber] = useState(1)
  // const [hasMore, setHasMore] = useState(true);
  const param = breedy[0]
    ? breedy[0].split(" ")[0].replace(",", "").toLowerCase()
    : "beagle";

    const {
      dogs,
      hasMore,
      loading,
    } = useBreedSearch(param, pageNumber)
    const observer = useRef()

    console.log("dogs in dogs layout", dogs)

    useEffect(()=> {
      setDodsPictures(dogs)
    }, [dogs])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log("param in useeffect ", param);

  //     const result = await axios(`https://dog.ceo/api/breed/${param}/images`);

  //     const myFiveteenDogs = result.data.message.slice(0, 17);

  //     setDodsPictures(myFiveteenDogs);
  //   };

  //   fetchData();
  // }, [param]);

 

  const lastBookElementRef = useCallback(node => {
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])


  if (breedy[0]) {
    return (
      <div id="backGround">
        {/* <InfiniteScroll
          dataLength={dogsPictures.length} //This is important field to render the next data
          next={clichHandel}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        > */}
          <div>
          </div>
          <div id="photos">
            {dogsPictures.map((picture, index) => {
                      if (picture.length === index + 1) {
              return (
                <div>
                  <img ref={lastBookElementRef}
                  src={picture}
                  alt=""
                  key={picture}
                  data-wow-delay="0.5s"
                  />
                  </div>
               
              )} else {
                return (
                   <img
                class="img-responsive"
                src={picture}
                alt=""
                key={picture}
                data-wow-delay="0.5s"
              />
                )
            }})}
          </div>
        {/* </InfiniteScroll> */}
      </div>
    );
  } else {
    return (
      <div id="whateSpace">
        {" "}
      </div>
    );
  }
};
export default DogsLayout;
