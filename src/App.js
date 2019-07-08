import React from 'react';
import Cabecalho from './ui/app/cabecalho'

import './ui/css/cabecalho.css';

import { Layout } from 'antd';

function App() {
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

export default App;
