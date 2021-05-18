import React from 'react';

const DrinkDetails = ({id, data}) => {
  //const id = match.params.id;

  const imgStyle = {
    width: '50%'
  }


  let output = data.map (inner => {
    if (inner.idDrink === id) {
      return (  
      <div key={inner.idDrink}>
        <h2>{inner.strDrink}</h2>
        <p>Type: {inner.strAlcoholic}</p>
        <p>Category: {inner.strCategory}</p>
        <p>Instructions: {inner.strInstructions}</p>
        <img className="img-fluid mb-5" style={imgStyle} src={inner.strDrinkThumb} alt="cocktail for the details"/>
      </div>
      )
    } 
  });

  return (
    <React.Fragment>
      {/* <p>Drink Details Works! {id}</p> */}
      {output}
    </React.Fragment>
  );
};

export default DrinkDetails;
