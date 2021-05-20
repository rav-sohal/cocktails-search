import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DrinkDetails = ({id}) => {
  //const id = match.params.id;

  const [data, setData] = useState ([]); // declare state
  const [query] = useState (id); // declare new state

  useEffect (
    () => {
      let source = axios.CancelToken.source();
      axios (
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`, {
            cancelToken: source.token
        })
        .then (response => setData (response.data.drinks))
        .catch (error =>
          console.log ('Error fetching and parsing data', error)
        )
        return function () {
            source.cancel();
            console.log('unmounted drinks details');
        };
    },
    [query]
  );

  const imgStyle = {
    width: '50%',
  };

  //   let output = data.map (inner => {
  //     if (inner.idDrink === id) {
  //       return (
  //       <div key={inner.idDrink}>
  //         <h2>{inner.strDrink}</h2>
  //         <p>Type: {inner.strAlcoholic}</p>
  //         <p>Category: {inner.strCategory}</p>
  //         <p>Instructions: {inner.strInstructions}</p>
  //         <img className="img-fluid mb-5" style={imgStyle} src={inner.strDrinkThumb} alt="cocktail for the details"/>
  //       </div>
  //       )
  //     }
  //   });

  return (
    <React.Fragment>
      {/* <p>Drink Details Works! {id}</p> */}
      {/* {output} */}
      {data.map (drink => (
        <div key={drink.idDrink} className="row">
          <div className="col-md-12">
            <h2>{drink.strDrink}</h2>
            <p>Type: {drink.strAlcoholic}</p>
            <p>Category: {drink.strCategory}</p>
            <p>Instructions: {drink.strInstructions}</p>
          </div>
          <div className="col-md-12">
            <img
              className="img-fluid mb-5"
              style={imgStyle}
              src={drink.strDrinkThumb}
              alt="cocktail for the details"
            />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default DrinkDetails;
