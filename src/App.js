import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import SearchResults from './components/search-results';
import Bookmarks from './components/bookmarks';
import ResultDetails from './components/result-details';
import NavigatingHeader from './components/navigating-header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      step: 1,
      previousStep: 1,
      openedItem: ''
    }
  }
  
  handleSearch = q => {
    this.setState({
      step: 2,
      query: q
    })
  }

  handleBack = () => {
    const step = this.state.previousStep || --this.state.step;
    this.setState({
      step: step,
      openedItem: '',
      previousStep: ''
    })
  }

  handleBookmarkBack = () => {
    this.setState({
      step: 1,
      openedItem: ''
    })
  }

  handleResultDetailsShow = (result, previousStep) => {
    this.setState({
      step: 3,
      previousStep: previousStep || '',
      openedItem: result
    })

  }

  render() {
    const results = [{
      name: 'name name namename name name name name name name',
      iata: 'IATA',
      icao: 'ICAO',
      countryCode: 'DE',
      city: 'Berlin'
    },
    {
      name: 'name',
      iata: 'IATA',
      icao: 'ICAO',
      countryCode: 'RO',
      city: 'Bucharest'
    },
    {
      name: 'name',
      iata: 'IATA',
      icao: 'ICAO',
      countryCode: 'HU',
      city: 'Budapest'
    }
  ];
    
    return (
      <div className={'main-wrapper'}>
        <Row type="flex" justify="center" className={'search-wrapper'}>
          <Col xs={20} sm={18} md={8}>
            <NavigatingHeader
              step={this.state.step}
              query={this.state.query}
              openedItem={this.state.openedItem}
              handleSearch={this.handleSearch}
              handleBack={this.handleBack}
              handleBookmarkBack={this.handleBookmarkBack}
            />
          </Col>
        </Row>

        <Row type="flex" justify="center" className={'section-wrapper'}>
          <Col xs={20} sm={18} md={8}>
          {
            this.state.step === 1 ? 
              <Bookmarks
                results={results}
                handleResultDetailsShow={item => this.handleResultDetailsShow(item, 1)}
              />
            :
              this.state.step === 2 ? 
                <SearchResults
                  results={results}
                  handleResultDetailsShow={item => this.handleResultDetailsShow(item)}
                />
              :
              <ResultDetails 
                data={results[0]}
              />
          }
          
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
