import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 100%; 
`;

const imageStyle = {
    width: 'auto',
    height: '350px',
  };

const Random = (props) => {
    return (
    <React.Fragment>
  <div className="row">
        <div className="col-md-4">
          <ImageContainer>
            <img
              src={props.image}
              style={imageStyle}
              alt="drink"
              className="img-fluid rounded border border-5"
            />
          </ImageContainer>
        </div>
        <div className="col-md-8">
          <h4>{props.title}</h4>
       <span className="badge bg-primary">Todays Random Selection</span>

          <hr />
          <p><strong>Drink Type</strong> {props.type}</p>
          <p><strong>Drink Catgeory</strong> {props.category}</p>
          <p>{props.instr}</p>
        </div>

      </div>
    </React.Fragment>    
)};

export default Random;