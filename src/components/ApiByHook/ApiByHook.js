import React, {useState, useEffect} from "react";
import axios from "axios";
import classes from "./ApiByHook.module.css";
import Cards from "../CardList/Cards/Cards";

function ApiByHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className={classes.center}>Hooked up API</p>
      <ul>
        {data.length &&
          data.map((item) => {
            return (
              <Cards
                cname={item.company.name}
                phrase={item.company.bs}
                name={item.name}
                username={item.username}
                website={item.website}
                phone={item.phone}
                city={item.address.city}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ApiByHook;
