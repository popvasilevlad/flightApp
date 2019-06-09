import React, { Component } from 'react';
import AirportCard from '../airport-card';
import { connect } from 'react-redux';
import { showDetails, goBack } from '../../actions';
import { Icon, Row, Col } from 'antd';

const mapDispatchToProps = dispatch => {
  return {
    showDetails: data => dispatch(showDetails(data)),
    goBack: () => dispatch(goBack())
  }
}

const mapStateToProps = state => {
  return { 
    step: state.step,
    results: state.results,
  }
};

class SearchResultsClass extends Component {
  render() {
    const { step, results, showDetails, goBack } = this.props;

    if (step !== 2 ) return false;

    return (

      <div>
        <Row>
          <Col span={6}>
            <Icon type="arrow-left" onClick={goBack} className={'back-icon'}/>
          </Col>
          <Col span={18} style={{textAlign: 'right'}}>
            { 
              results && results.length ? 
                <div className={'section-title'}>
                Results: {results.length} 
                </div>
              :
                null
            }
          </Col>
        </Row>
        {   
          results && results.length ? 
            results.map((item, index) => 
              <div key={item.code} onClick={() => showDetails({data: item})}>
              <AirportCard
              data={item}
              />
              </div>
              )
          :
            <div>No results found</div>
        }
      </div>
    );
  }
}

const SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResultsClass);

export default SearchResults;