import React, { Component } from 'react';
import { Card } from 'antd';

export default class AirportCard extends Component {
  render() {
    const data = this.props.data;

    return (
      <Card
        className={'airport-card'}
        style={{marginTop: '10px', textAlign: 'center'}}
      >
        <div
          className={'card-name'}
        >
          {data.name}
        </div>
        <div>{data.code}</div>
        <div>Country: {data.country}</div>
      </Card>
    );
  }
}