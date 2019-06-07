import React, { Component } from 'react';
import { Input, Icon, Button, Row, Col } from 'antd';

export default class NavigatingHeader extends Component {
    render() {
        const Search = Input.Search; 
        const { step } = this.props;

        if (step === 1) { 
            const { handleSearch } = this.props;
            
            return(
                <Search
                    placeholder="Search"
                    onSearch={value => handleSearch(value)}
                />
            )
        }

       const { openedItem, query, handleBack } = this.props;

        return(
            <Row>
                <Col xs={6} sm={5} md={5}>
                    <Button
                        type="secondary"
                        onClick={handleBack}
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

