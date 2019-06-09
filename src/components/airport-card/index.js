import React, { Component } from 'react';
import { Card, Icon, Row, Col } from 'antd';

export default class AirportCard extends Component {
  render() {
    const data = this.props.data;

    return (
      <Card
        className={'airport-card'}
      >
        <Row>
          <Col
            span={18}
            className={'card-name'}
          >
            {data.name || `${data.code} Airport`}
          </Col>
          <Col
            className={'card-iata'}
            span={5}
            offset={1}
          >
            {data.code}
          </Col>
        </Row>
        <Row>
          <Col span={18}>
           <Icon
              type="environment"
              theme="filled"
              className={'location-icon'}
            />
            {data.city}, {data.country}
          </Col>
          <Col
            span={5}
            offset={1}
            className={'see-details'}
          >
            See details <Icon type="arrow-right" />
          </Col>
        </Row>
      </Card>
    );
  }
}