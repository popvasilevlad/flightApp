import React, { Component } from 'react';
import { Input, Icon, Button, Row, Col } from 'antd';
import { goBack, search } from '../../actions';
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
    goBack: () => dispatch(goBack()),
    search: value => dispatch(search(value))
  }
}


class NavigatingHeaderComponent extends Component {
  render() {
    const Search = Input.Search; 
    const { step, openedItem, query, goBack } = this.props;

    if (step === 1) { 
      const { search } = this.props;

      return (
        <Search
          placeholder="Search"
          onSearch={value => search(value)}
        />
        )
    }
    return (
      <Row>
        <Col xs={6} sm={5} md={5}>
          <Button
            type="secondary"
            onClick={goBack}
            style={{width: 'calc(100% - 10px)', margin: '0 5px'}}
          >
            <Icon type="arrow-left" />
          </Button>
        </Col>
        <Col xs={18} sm={19} md={19}>
          {
            step === 2 ?
            <Input
              value={query}
              disabled={true}
            />
            :
            <div className={'result-details-header'}>
              {openedItem.iata}
            </div>
          }
        </Col>
      </Row>
    );
  }
}

const NavigatingHeader = connect(mapStateToProps, mapDispatchToProps)(NavigatingHeaderComponent);

export default NavigatingHeader;

