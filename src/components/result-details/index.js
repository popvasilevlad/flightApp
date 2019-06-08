import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import { toggleBookmark } from '../../js/actions';

const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks,
    data: state.openedItem,
    step: state.step
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleBookmark: data => dispatch(toggleBookmark(data))
  }
}

class ResultDetailsClass extends Component {
  checkIfBooked() {
    const { bookmarks, data } = this.props;

    return bookmarks.hasOwnProperty(data.iata);
  }

  render() {
    const { data, step, toggleBookmark } = this.props;
    const isBooked = this.checkIfBooked();

    if (step !== 3) return false;

    if (!data) { 
      return(<div> Error occured :( </div>)
    }

    return (
      <div className={'result-details-wrapper'}>
        <Row className={'results-details-title'}>
          <Col span={16} >
            <h3>{data.name}</h3>
          </Col>    
          <Col span={8} style={{textAlign: 'right'}} >
            {
              isBooked ? 
              <Icon
              type="star"
              theme="filled"
              className={'bookmark-icon filled'}
              onClick={() => toggleBookmark(data)}
              />
              :
              <Icon
              type="star"
              theme="twoTone"
              className={'bookmark-icon'}
              onClick={() => toggleBookmark(data)}
              />
            }
          </Col>
        </Row> 
        <div>
          <br/>
          <div>IATA: {data.iata}</div>    
          <div>ICAO: {data.icao}</div> 
          <br/><br/>
          <div>CITY: {data.city}</div>    
          <div>Country: {data.countryCode}</div>
          <br />
          <br />
          <div
            style={{
              width: '100%',
              backgroundColor: 'gray',
              height: '200px',
              textAlign: 'center',
              padding: '110px',
              color: '#FFF'
              }}
          >
            MAP HERE
          </div>
        </div>   
      </div>
    );
  }
}

const ResultDetails = connect(mapStateToProps, mapDispatchToProps)(ResultDetailsClass)

export default ResultDetails;