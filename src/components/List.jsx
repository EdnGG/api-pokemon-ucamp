import React, { useEffect, useState } from "react";
import Card from "./Card";

const List = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <>
      <div className="list__container">
        List that contains a pockemon's cards
        {pokemons.map((pokemon, index) => {
          return <Card name={pokemon.name} url={pokemon.url} index={index} />;
        })}
      </div>
      {/* <Card   /> */}
    </>
  );
};

export default List;
