import React, {useEffect, useState} from "react";

export interface Universitate {
  name: string,
  country: string,
  web_pages: Array<string>
}
export function useFetch(size: number) {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    error && setError('');
    if (!region) {
      setData([])
      return;
    }
    (async function() {
      setLoading(true);
      try {
        const response = await fetch("http://universities.hipolabs.com/search?country=" + region);
        const data = await response.json();
        data && setData(data.slice(0, size));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
      setLoading(false);
    })();
  }, [region])
  
  return {data, loading, setRegion, error} as {data: Array<Universitate>, loading: boolean, setRegion: React.Dispatch<React.SetStateAction<string>>, error: string};
}