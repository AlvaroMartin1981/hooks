import { useState, useEffect } from "react";


/*const useFetchCharacter = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
  
    useEffect(() => {
      // async function fetchURL () {
      //   try {
      //     const response = await fetch(url)
      //     const dataJson = await response.json()
      //     setData(dataJson)
      //     setLoading(false)
      //   } catch (err) {
      //     console.log(setError(err))
      //   }
      // }
      fetch(url)
        .then(response => response.json())
        .then(dataJson => {
          setData(dataJson)
          setLoading(false)
        }).catch(err => {
          console.log(setError(err))
        }) 
    }, [])
    return {data, loading, error}
    
  };
  
  export default useFetchCharacter*/
  
const  useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (err) {
                console.error(setError,err);
            }
        }
        
        fetchData();
    }, [url]);
    
    return { data, loading };

}

export default useFetch;