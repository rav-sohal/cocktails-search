import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ImageContainer = styled.div`
    width: 100%; 
`;

const BlockBtn = styled.button`
    width: 100%;
`;

const imageStyle = {
  width: 'auto',
  height: '100px',
};

const Result = props => {
  return (
    <React.Fragment>
      <div className="row mb-4">
        <div className="col-md-2">
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
          <p><strong>Drink Type</strong> {props.type}</p>
          <p><strong>Drink Catgeory</strong> {props.category}</p>
        </div>
        <div className="col-md-2">
        <Link to={`/details/${props.id}`}><BlockBtn className="btn btn-primary mt-3">View</BlockBtn></Link>
        </div>
      </div>
    </React.Fragment>
  );
};

Result.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number
  };

export default Result;
