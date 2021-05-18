import React from 'react';
import Random from './Random';

const style = {
  height: 'auto',
  backgroundColor: '#efefef',
  padding: '50px',
};

const Content = props => {
  const result = props.random;
  // console.log (result);
  let drinks = result.map (randomDrink => (
    <div className="container" key={randomDrink.idDrink}>
      <Random
        title={randomDrink.strDrink}
        image={randomDrink.strDrinkThumb}
        type={randomDrink.strAlcoholic}
        category={randomDrink.strCategory}
        instr={randomDrink.strInstructions}
      />
    </div>
  ));

  return (
    <React.Fragment>
      <div style={style}>
        <div className="container" />
        {drinks}
      </div>
      <div className="container">
      </div>
    </React.Fragment>
  );
};

export default Content;
