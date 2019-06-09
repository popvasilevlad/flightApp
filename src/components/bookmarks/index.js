import React, { Component } from 'react';
import AirportCard from '../airport-card';
import { connect } from 'react-redux';
import { showDetails } from '../../actions';
import { Icon } from 'antd';

const mapStateToProps = state => {
  return { 
    bookmarks: state.bookmarks,
    step: state.step
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showDetails: data => dispatch(showDetails(data))
  }
}

class BookmarksClass extends Component {
  render() {
    const { bookmarks, step, showDetails } = this.props;

    if (step !== 1 ) return false;

    return (
      <div>
        <div>
          <Icon type="pushpin" theme="filled" style={{marginRight: '5px'}}/>
          BOOKMARKS
        </div>
        {
          bookmarks && Object.keys(bookmarks).length ?
            Object.keys(bookmarks).map((item, index) => 
              <div  key={bookmarks[item].code} onClick={() => showDetails({data: bookmarks[item], previousStep: 1})}>
                <AirportCard data={bookmarks[item]}/>
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