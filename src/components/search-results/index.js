import React, { Component } from 'react';
import AirportCard from '../airport-card';
import { connect } from 'react-redux';
import { showDetails } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    showDetails: data => dispatch(showDetails(data))
  }
}

const mapStateToProps = state => {
  return { 
    step: state.step,
    results: state.results,
  }
};

class SearchResultsClass extends Component {
  render() {
    const { step, results, showDetails } = this.props;

    if (step !== 2 ) return false;

    return (
      <div>
        { results && results.length ? 
            <div className={'section-title'}>
            Results: {results.length} 
            </div>
          :
            null
        }
        {   
          results && results.length ? 
            results.map((item, index) => 
              <div key={item.code} onClick={() => showDetails({data: item})}>
              <AirportCard
              data={item}
              />
              </div>
              )
          :
            <div>No results found</div>
        }
      </div>
    );
  }
}

const SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResultsClass);

export default SearchResults;