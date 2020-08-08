import React, {useState, useEffect} from "react";
import classes from "./ApiByHookThree.module.css";
import axios from "axios";
import Cards from "../CardList/Cards/Cards";

const useApiFetcher = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
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

function ApiByHook() {
  const [query, setQuery] = useState(9);
  const [{data, isLoading, isError}, doFetch] = useApiFetcher(
    `https://jsonplaceholder.typicode.com/users/${query}`,
    {}
  );

  const {id, website, name, username, email, phone, address} = data;

  return (
    <div>
      {isError && <div className={classes.center}>Something went wrong ...</div>}
      <p className={classes.center}>Hooked up API</p>

      {isLoading ? (
        <div className={[classes.center, classes.waiting].join(" ")}>Loading ...</div>
      ) : (
        <div>
          <div>
            {!isError && (
              <div className={classes.center}>
                <Cards
                  id={id}
                  name={name}
                  username={username}
                  website={website}
                  phone={phone}
                />
              </div>
            )}
          </div>
        </div>
      )}

      <div className={[classes.center, classes.inp].join(" ")}>
        <form
          onSubmit={(event) => {
            doFetch(`https://jsonplaceholder.typicode.com/users/${query}`);
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default ApiByHook;
