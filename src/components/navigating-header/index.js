import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import { search } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { 
    step: state.step,
    query: state.query,
    openedItem: state.openedItem
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: value => dispatch(search(value))
  }
}


class NavigatingHeaderComponent extends Component {
  render() {
    const Search = Input.Search; 
    const { step, openedItem, query, search } = this.props;

    return (
      <Row>
        <Col xs={6} sm={5} md={5}>
          <div
            className={'logo'}>
              PXI
          </div>
        </Col>
        <Col xs={18} sm={19} md={19}>
          {
            step === 1 ?
              <Search
                placeholder="Search"
                onSearch={value => value ? search(value) : false}
              />
            :
              step === 2 ?
                <Input
                  value={query}
                  disabled={true}
                />
              :
              <Input
                value={openedItem.name}
                disabled={true}
              />

          }
        </Col>
      </Row>
    );
  }
}

const NavigatingHeader = connect(mapStateToProps, mapDispatchToProps)(NavigatingHeaderComponent);

export default NavigatingHeader;

