import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import SearchResults from './components/search-results';
import Bookmarks from './components/bookmarks';
import ResultDetails from './components/result-details';
import NavigatingHeader from './components/navigating-header';
import { connect } from 'react-redux';
import { updateBookmarks } from './js/actions';

const mapDispatchToProps = dispatch => {
    return {
        updateBookmarks: () => dispatch(updateBookmarks())
    }
}

class AppClass extends Component {
  componentWillMount() {
    this.props.updateBookmarks();
  }

  render() {
    return (
      <div className={'main-wrapper'}>
        <Row type="flex" justify="center" className={'search-wrapper'}>
          <Col xs={20} sm={18} md={10}>
            <NavigatingHeader
            />
          </Col>
        </Row>
    
        <Row type="flex" justify="center" className={'section-wrapper'}>
          <Col xs={20} sm={18} md={10}>
            <Bookmarks />
            <SearchResults />
            <ResultDetails />
          </Col>
        </Row>
      </div>
    );
  }
}

const App = connect('', mapDispatchToProps)(AppClass);

export default App;
