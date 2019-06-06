import React, { Component } from 'react';
import { Card } from 'antd';

export default class AirportCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return(
            <Card style={{marginTop: '10px', textAlign: 'center'}}>
                <div>{data.name}</div>
                <div>{data.iata}</div>
                <div>Country: {data.countryCode}</div>
            </Card>
        );
    }
}