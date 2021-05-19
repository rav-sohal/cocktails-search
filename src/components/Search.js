import React, {Component} from 'react';

const blockBtn = {
  width: '100%',
};

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
            <div className="col-md-6">
              <p className="mt-2">
                Search for your favourite drink / cocktail from an extensive database
              </p>
            </div>
            <div className="col-md-4">
              <input
                type="search"
                ref={input => (this.searchQuery = input)}
                className="form-control mb-2"
                placeholder="Search"
                onChange={this.onSearchChange}
              />
            </div>
            <div className="col-md-2">
              <button
                type="submit"
                style={blockBtn}
                className="btn btn-dark col-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
