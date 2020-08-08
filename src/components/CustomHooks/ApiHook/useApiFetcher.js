// const [data, setData] = useState({})
// const [query , setQuery] = useState(1);
// const [url , setUrl]  = useState('https://jsonplaceholder.typicode.com/users/1');

// const [isLoading, setIsLoading] = useState(false);
// const [isError, setIsError] = useState(false);

// useEffect(()  => {
//     const fetchData =  async() => {
//         setIsError(false);
//         setIsLoading(true);
//         try {
//             const result = await axios(url)
//             setData(result.data);
//         } catch {
//             console.log('error', 'error')
//             setIsError(true);
//         }
//        setIsLoading(false);
//     };
//     fetchData();
// } , [url])

const useApiFetcher = () => {
  const [data, setData] = useState({});
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users/1");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch {
        console.log("error", "error");
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [{data, isLoading, isError}, setUrl];
};
