import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class Cabecalho extends Component {
    render(){
        return (
            <div className="cabecalho">
                <Row gutter={16}>
                    <Col span={6} className="cabecalho-logo">
                        <h1>LIVRARIA</h1>
                    </Col>
                    <Col span={18}>
                        LIVRARIA
                    </Col>
                </Row>
            </div>
        )
    }
}