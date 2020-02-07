import React, { Component } from "react";
import { Layout } from "antd";
const { Sider, Content } = Layout;

class Marchendise extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Marchendise;
