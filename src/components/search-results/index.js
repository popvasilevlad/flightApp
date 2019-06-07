import React, { Component } from 'react';
import AirportCard from '../airport-card';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { 
        step: state.step,
        results: state.results,
        bookedItems: state.bookedItems,
    }
};

 class SearchResultsClass extends Component {
    render() {
        const { step, results, handleResultDetailsShow, bookedItems } = this.props;
        console.log(this.props)
        if (step !== 2 ) return false;

        return(
            <div>
                {results && results.length ? 
                    <div className={'section-title'}>
                       Results: {results.length} 
                    </div>
                    :
                    null
                }
                {   
                    results && results.length ? 

                        results.map((item, index) => 
                        <div  key={index} onClick={() => handleResultDetailsShow(item)}>
                            <AirportCard
                                data={item}
                                bookedItems={bookedItems}
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

const SearchResults = connect(mapStateToProps)(SearchResultsClass);

export default SearchResults;