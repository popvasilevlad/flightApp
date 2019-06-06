import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';

export default class NavigatingHeader extends Component {
    constructor(props) {
        super(props);
    }

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

        if(step === 2) {
            const { query, handleBack } = this.props;
            return(
                <Row>
                    <Col span={4}>
                        <Button
                            type="secondary"
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                    </Col>
                    <Col span={20}>
                        <Input
                            value={query}
                            disabled={true}
                        />
                    </Col>
                </Row>
            )
        } else {
            const { openedItem, handleBack } = this.props;
            return(
                <Row>
                    <Col span={4}>
                        <Button
                            type="secondary"
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                    </Col>
                    <Col span={20}>
                        {openedItem.name}
                    </Col>
                </Row>
            );
            
        }

    }
}

