import React, { Component } from 'react';
import { Row, Col } from 'antd';

import '../css/cabecalho.css';

export default class Cabecalho extends Component {
    render(){
        return (
            <Row gutter={16} className="cabecalho">
                <Col span={5}><h2 className="cabecalho-logo">LIVRARIA</h2></Col>
                <Col span={5}><h2>LOREM IPSUM</h2></Col>
            </Row>
        )
    }
}