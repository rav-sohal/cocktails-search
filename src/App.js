import React, {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Search from './components/Search';
import ResultList from './components/ResultList';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import DrinkDetails from './components/DrinkDetails';


const cancelRequest = axios.CancelToken.source();

class App extends Component {
  state = {
    cocktails: [],
    cocktailId: [],
    randomCocktail: [],
    loading: true,
  };

  searchCocktails = query => {
    axios
      .get (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}` , {
        cancelToken: cancelRequest.token
      })
      .then (response => {
        this.setState ( {cocktails: response.data.drinks, loading: false});
      })
      .catch (error => {
        console.log ('Error', error);
      });
  };

  getRandomCocktail = () => {
    axios
      .get ('https://www.thecocktaildb.com/api/json/v1/1/random.php', { 
        cancelToken: cancelRequest.token
      })
      .then (response => {
        this.setState ({randomCocktail: response.data.drinks, loading: false});
      })
      .catch (error => {
        console.log ('Error', error);
      });
  };

  componentDidMount () {
    this.getRandomCocktail ();
    //console.log('mounted random');
  }

  componentWillUnmount() {
    cancelRequest.cancel();
    //console.log('unmounted random');
  }

  render () {
    return (
      <BrowserRouter>
        <Header />
        <div className="App container mt-5">
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                {this.state.loading
                  ? <div className="container text-center mt-5">
                      <div className="spinner-border text-secondary">
                        <span className="sr-only text-center" />
                      </div>
                    </div>
                  : <Content random={this.state.randomCocktail} />}

                <Search onSearch={this.searchCocktails} />

                {this.state.loading
                  ? <div className="container text-center mt-5">
                      <div className="spinner-border text-secondary">
                        <span className="sr-only text-center" />
                      </div>
                    </div>
                  : <ResultList data={this.state.cocktails} />}
              </React.Fragment>
            )}
          />
          <Route
            path="/details/:id"
            render={({match}) => <DrinkDetails id={match.params.id} />}
          />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
