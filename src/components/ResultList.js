import React from 'react';
import Result from './Result';

const style = {
  height: 'auto',
  backgroundColor: '#efefef',
  padding: '50px',
};

const noResults = () => {
  return <p>There are no results, please try again!</p>;
};

const ResultList = props => {
  const result = props.data;
  let resultDrinks;

  if (result) {
    resultDrinks = result.map (inner => (
      <Result
        key={inner.idDrink}
        title={inner.strDrink}
        image={inner.strDrinkThumb}
        type={inner.strAlcoholic}
        category={inner.strCategory}
        instr={inner.strInstructions}
        id={inner.idDrink}
      />
    ));
  } else {
    resultDrinks = noResults ();
  }

  return (
    <React.Fragment>
      <div style={style}>
        <div className="container" />
        {resultDrinks}
      </div>
    </React.Fragment>
  );
};

export default ResultList;
