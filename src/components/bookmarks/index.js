import React, { Component } from 'react';
import AirportCard from '../airport-card';

export default class Bookmarks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { results, handleResultDetailsShow } = this.props;
        
        return(
            <div>
                <h1>Bookmarks</h1>
                { results.map((item, index) => 
                    <div  key={index} onClick={() => handleResultDetailsShow(item)}>
                        <AirportCard data={item}/>
                    </div>
                )}
            </div>
        );
    }
}