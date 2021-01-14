import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from "react-redux";
import { selectBreed } from "../store/breed/selectors";



export default function useBreedSearch(breed, number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [dogs, setDogs] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const breedy = useSelector(selectBreed);
  const param = breedy[0]
    ? breedy[0].split(" ")[0].replace(",", "").toLowerCase()
    : "beagle";


  useEffect(() => {
    setDogs([])
  }, [breed])

  useEffect(() => {
    setLoading(true)
    setError(false)
    if(param){
    const clichHandel = async () => {
        const result = await axios(`https://dog.ceo/api/breed/${param}/images`);
    
        // const myFiveteenDogs = result.data.message.slice(18, 100);
    
        setDogs(prevBooks => {
            return [...new Set([...prevBooks, ...result.data.message])]
          })
            console.log(dogs, "dogs after setdogs")
            setHasMore(result.data.message.length > 0)
            setLoading(false)
      }

      clichHandel()

    }
  }, [breed, number])


  return { loading, error, dogs, hasMore }
}

