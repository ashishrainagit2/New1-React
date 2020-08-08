import React, {useState, useEffect, useReducer} from "react";
import axios from "axios";
import classes from "./ApiByHookFour.module.css";
import Cards from "../CardList/Cards/Cards";

const useApiFetcher = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  // const [data, setData] = useState(initialData)
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({type: "FETCH_INIT"});
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({type: "FETCH_SUCCESS", payload: result.data});
        }
      } catch {
        if (!didCancel) {
          dispatch({type: "FETCH_FAILURE"});
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
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
