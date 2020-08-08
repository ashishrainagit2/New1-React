import React, {useState, useEffect} from "react";
import classes from "./ApiByHookTwo.module.css";
import axios from "axios";
import Cards from "../CardList/Cards/Cards";

function ApiByHook() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState(1);
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
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() => setUrl(`https://jsonplaceholder.typicode.com/users/${query}`)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default ApiByHook;
