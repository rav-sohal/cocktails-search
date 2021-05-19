import React, {Component} from 'react';
import PropTypes from 'prop-types';

const blockBtn = {
  width: '100%',
};

const floater = {
  float: 'right',
}

class Search extends Component {
  state = {
    searchText: '',
  };

  onSearchChange = e => {
    this.setState ({searchText: e.target.value});
  };

  performSearch = e => {
    e.preventDefault ();
    this.props.onSearch (this.state.searchText);
    e.currentTarget.reset ();
  };

  render () {
    return (
      <React.Fragment>
        <form id="submit" onSubmit={this.performSearch}>

          <div className="row mt-4 mb-4">
           
            <div className="col-md-4">
              <input
                type="search"
                ref={input => (this.searchQuery = input)}
                className="form-control form-control-lg mb-2"
                placeholder="Search"
                onChange={this.onSearchChange}
              />
            </div>
            <div className="col-md-2">
              <button
                type="submit"
                style={blockBtn}
                className="btn btn-lg btn-dark col-2"
              >
                Search
              </button>
            </div>
            <div className="col-md-6">
              <p className="mt-2" style={floater}>
                Search for your favourite drink / cocktail from an extensive database
              </p>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func
}

export default Search;
