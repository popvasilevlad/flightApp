import React, { Component } from 'react';
import AirportCard from '../airport-card';

export default class SearchResults extends Component {
    render() {
        const { results, handleResultDetailsShow, bookedItems } = this.props;
        
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