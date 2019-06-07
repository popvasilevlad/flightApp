import React, { Component } from 'react';
import AirportCard from '../airport-card';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { results, handleResultDetailsShow, bookedItems } = this.props;
        
        return(
            <div>
                <h1>
                    Results
                </h1>
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