import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import { toggleBookmark, goBack } from '../../actions';
import { GoogleMap, LoadScript  } from '@react-google-maps/api';

const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks,
    data: state.openedItem,
    step: state.step
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleBookmark: data => dispatch(toggleBookmark(data)),
    goBack: () => dispatch(goBack())
  }
}

class ResultDetailsClass extends Component {
  checkIfBooked() {
    const { bookmarks, data } = this.props;

    return bookmarks.hasOwnProperty(data.code);
  }

  render() {
    const { data, step, toggleBookmark, goBack } = this.props;
    const isBooked = this.checkIfBooked();

    if (step !== 3) return false;

    if (!data) { 
      return(<div> Error occured :( </div>)
    }
    console.log(data.lat, data.lon)
    return (
      <div>
          <Icon
            type="arrow-left"
            onClick={goBack}
            className={'back-icon'}
            style={{marginBottom: '10px'}}
          />
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
          <div className={'details-container'}>
            <div>IATA: {data.code}</div>    
            <div>ICAO: {data.icao}</div> 
            <div>City: {data.city}</div>    
            <div>Country: {data.country}</div>
            {
              data.email ?
                <div>Email: {data.email}</div>
              :
                null
            }
            {
              data.phone ?
                <div>Phone: {data.phone}</div>
              :
                null
            }
          </div>
          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyDyeC2McNPTAskUeuRqVc8OzG8EIPevbfU"
          >
            <GoogleMap
              id={'google-map'}
              center={{lat: data.lat, lng: data.lon}}
              zoom={2}
              onLoad={map => {
                const bounds = new window.google.maps.LatLngBounds();
                map.fitBounds(bounds);
              }}
            >
              ...Your map components
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  }
}

const ResultDetails = connect(mapStateToProps, mapDispatchToProps)(ResultDetailsClass)

export default ResultDetails;