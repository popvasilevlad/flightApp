import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';

export default class ResultDetails extends Component {
    checkIfBooked() {
        const { bookedItems, data } = this.props;
        return bookedItems.findIndex(elem => elem.iata === data.iata) > -1;
    }

    render() {
        const { data, handleBookmarkClick } = this.props;
        const isBooked = this.checkIfBooked();

        return(
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
                                onClick={() => handleBookmarkClick(data)}
                            />
                        :
                            <Icon
                                type="star"
                                theme="twoTone"
                                className={'bookmark-icon'}
                                onClick={() => handleBookmarkClick(data)}
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