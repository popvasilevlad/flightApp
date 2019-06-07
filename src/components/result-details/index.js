import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

export default class ResultDetails extends Component {
    constructor(props) {
        super(props);
    }

    checkIfBooked() {
        const { bookedItems, data } = this.props;
        return bookedItems.findIndex(elem => elem.iata === data.iata) > -1;
    }

    render() {
        const { data, handleBookmarkClick } = this.props;
        const isBooked = this.checkIfBooked();

        return(
            <div>
                <Row>
                    <Col span={16}>
                        <h3>{data.name}</h3>
                    </Col>    
                    <Col span={8} style={{textAlign: 'right'}}>
                    {
                        isBooked ? 
                            <Button onClick={() => handleBookmarkClick(data)} type="dashed" size={'large'}>
                                Unmark
                            </Button>
                        :
                            <Button onClick={() => handleBookmarkClick(data)} type="primary" size={'large'}>
                                Bookmark
                            </Button>


                    }
                    </Col>
                </Row> 
                <div>
                    <br/><br/>
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
                            backgroundColor: 'green',
                            height: '150px',
                            textAlign: 'center',
                            padding: '60px',
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