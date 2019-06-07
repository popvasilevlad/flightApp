import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import SearchResults from './components/search-results';
import Bookmarks from './components/bookmarks';
import ResultDetails from './components/result-details';
import NavigatingHeader from './components/navigating-header';
import cookie from 'react-cookies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      step: 1,
      previousStep: 1,
      openedItem: '',
      bookedItems: []
    }
  }

  componentDidMount() {
    this.updateBookedItems();
  }

  updateBookedItems() {
    const bookedItems = Object.keys(cookie.load('bookedItems')).map(key => cookie.load('bookedItems')[key]);
    this.setState({
      bookedItems: bookedItems
    })
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

  handleBookmarkClick = item => {
    let bookedItems = cookie.load('bookedItems');
    if(bookedItems) {
      if(bookedItems.hasOwnProperty(item.iata)) {
        delete bookedItems[item.iata];
      } else {
        bookedItems[item.iata] = item;
      }
    }
    else {
      bookedItems = {
        [item.iata]: item
      }
    }
    cookie.save('bookedItems', bookedItems, { path: '/' });
    this.updateBookedItems();
  }

  render() {
    const results = [{
      name: 'name name namename name name name name name name',
      iata: 'IATA1',
      icao: 'ICAO1',
      countryCode: 'DE',
      city: 'Berlin'
    },
    {
      name: 'name2',
      iata: 'IATA2',
      icao: 'ICAO2',
      countryCode: 'RO',
      city: 'Bucharest'
    },
    {
      name: 'name3',
      iata: 'IATA3',
      icao: 'ICAO3',
      countryCode: 'HU',
      city: 'Budapest'
    }];

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
                results={this.state.bookedItems}
                bookedItems={this.state.bookedItems}
                handleResultDetailsShow={item => this.handleResultDetailsShow(item, 1)}
                handleBookmarkClick={item => this.handleBookmarkClick(item)}
              />
            :
              this.state.step === 2 ? 
                <SearchResults
                  results={results}
                  bookedItems={this.state.bookedItems}
                  handleResultDetailsShow={item => this.handleResultDetailsShow(item)}
                />
              :
              <ResultDetails 
                data={this.state.openedItem}
                handleBookmarkClick={this.handleBookmarkClick}
                bookedItems={this.state.bookedItems}
              />
          }
          
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
