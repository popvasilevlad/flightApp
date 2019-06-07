import React, { Component } from 'react';
import AirportCard from '../airport-card';
import { connect } from 'react-redux';
import { showDetails } from '../../js/actions';

const mapStateToProps = state => {
    return { 
        bookedItems: state.bookedItems,
        step: state.step
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showDetails: () => dispatch(showDetails())
    }
}

class BookmarksClass extends Component {
    render() {
        if (this.props.step !== 1 ) return false;

        const { bookedItems, handleResultDetailsShow, handleBookmarkClick } = this.props;
        
        return(
            <div>
                <h1>Bookmarks</h1>
                {
                    bookedItems && bookedItems.length ?
                        bookedItems.map((item, index) => 
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
const Bookmarks = connect(mapStateToProps, mapDispatchToProps)(BookmarksClass)

export default Bookmarks;