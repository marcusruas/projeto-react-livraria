import React, { Component } from 'react';
import { Layout } from 'antd';

import Cabecalho from './ui/app/cabecalho';

class App extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <div>
        <Layout>
          <Header>
            <Cabecalho />
          </Header>
          <Layout>
            <Sider>MENU</Sider>
            <Content>TELA</Content>
          </Layout>
          <Footer>RODAPÉ</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
