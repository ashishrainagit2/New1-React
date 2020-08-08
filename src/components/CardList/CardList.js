import React from "react";
import Cards from "./Cards/Cards";

function CardList(props) {
  let cards = props.list.length === 0 ? <div>Loading ...</div> : <div>Boarding...</div>;

  if (props.list.length !== 0) {
    cards = props.list.map((item) => {
      return (
        <Cards
          id={item.id}
          name={item.name}
          cname={item.company.name}
          phrase={item.company.bs}
          username={item.username}
          phone={item.phone}
          website={item.website}
          city={item.address.city}
          key={item.id}
        />
      );
    });
  }

  return <div>{cards}</div>;
}

export default CardList;
