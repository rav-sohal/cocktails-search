import React from 'react';
import Result from './Result';

const style = {
  height: 'auto',
  backgroundColor: '#efefef',
  padding: '50px',
};

const ResultList = props => {
  const result = props.data;
  let resultDrinks = result.map(inner => 
       <Result key={inner.idDrink}
       title={inner.strDrink}
       image={inner.strDrinkThumb}
       type={inner.strAlcoholic}
       category={inner.strCategory}
       instr={inner.strInstructions}
       id={inner.idDrink}
       />
  );
  return (
    <React.Fragment>
      <div style={style}>
        <div className="container" />
        {resultDrinks}
      </div>
      <div className="container">
      </div>
    </React.Fragment>
  );
};

export default ResultList;
