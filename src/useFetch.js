import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setIsError(false)
            try {
              const { data } = await axios.get(url);
              setData(data);
            } catch (error) {
              console.log(error);
              setIsError(true);
              setIsLoading(false)
            }
            setIsLoading(false);
          })();
    }, [url]);


  return {data, isLoading, isError}
}

export default useFetch
