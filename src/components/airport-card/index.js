import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { toogleBookmark } from '../../js/actions';

const mapStateToProps = state => {
    return { 
        openedItem: state.openedItem,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toogleBookmark: item => dispatch(toogleBookmark(item))
    }
}

class AirportCardClass extends Component {
    render() {
        const data = this.props.openedItem;
        return(
            <Card
                className={'airport-card'}
                style={{marginTop: '10px', textAlign: 'center'}}
            >
                <div
                    className={'card-name'}
                >
                    {data.name}
                </div>
                <div>{data.iata}</div>
                <div>Country: {data.countryCode}</div>
            </Card>
        );
    }
}

const AirportCard = connect(mapStateToProps, mapDispatchToProps)(AirportCardClass)

export default AirportCard;