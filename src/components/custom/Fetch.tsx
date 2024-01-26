import React, {useEffect, useState} from "react";

export interface Universitate {
  name: string,
  country: string,
  web_pages: Array<string>
}
export function useFetch(size: number) {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setRegion] = useState('');
  
  useEffect(() => {
    if (!state) {
      return;
    }
    (async function() {
      setLoading(true);
      const response = await fetch("http://universities.hipolabs.com/search?country=" + state);
      const data = await response.json();
      data && setData(data.slice(0, size));
      //timeout for example
      setTimeout(() => {
        setLoading(false);
        }, 2000);
    })();
  }, [state])
  
  return {data, loading, setRegion} as {data: Array<Universitate>, loading: boolean, setRegion: React.Dispatch<React.SetStateAction<string>>};
}