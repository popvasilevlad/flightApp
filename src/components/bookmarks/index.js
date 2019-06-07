import React, { Component } from 'react';
import AirportCard from '../airport-card';

export default class Bookmarks extends Component {
    render() {
        const { results, handleResultDetailsShow, handleBookmarkClick } = this.props;
        
        return(
            <div>
                <h1>Bookmarks</h1>
                {
                    results && results.length ?
                        results.map((item, index) => 
                            <div  key={index} onClick={() => handleResultDetailsShow(item)}>
                                <AirportCard data={item} handleBookmarkClick={handleBookmarkClick}/>
                            </div>
                        )
                    :
                    <div>No bookmarked items yet</div>

                }
            </div>
        );
    }
}