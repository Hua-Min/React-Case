import React,{Component} from 'react';
import './admin.less'
import {isLogin} from "../../api/user-api";
import {Redirect} from "react-router-dom";

//ui
import LeftNav from './components/left-nav/left-nav'
import RightHeader from './components/right-header/right-header'

import { Layout } from 'antd';

const { Content,Footer } = Layout;


class Admin extends Component{

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        //判断是否登陆
        if (!isLogin()){
            return <Redirect to={'/login'}/>;
        }
        return(
            <Layout className={"adminPane"} trigger={null} collapsible collapsed={this.state.collapsed}>
                <LeftNav collapsed={this.state.collapsed} />
                <Layout>
                    <RightHeader collapsed={this.state.collapsed} toggle={this.toggle} />
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>

            </Layout>
        )
    }
}

export default Admin;