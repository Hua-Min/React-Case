import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom'
import './left-nav.less'
import PropTypes from 'prop-types';
import {getMenuList} from "../../../../api/menu-api";

import {Icon, Layout, Menu} from "antd";

const {Sider} = Layout;
const {SubMenu} = Menu;

class LeftNav extends Component {

    state = {
        menuList: []
    };

    static propTypes = {
        collapsed: PropTypes.bool,
    };



    renderMenu=(menuList)=>{
        return (menuList.map(item => {
                if (!item.children) {
                    return (
                        <Menu.Item key={item.id}>
                            <Link to={item._key}>
                                <Icon type={item.icon}/>
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                } else {
                    return (
                        <SubMenu
                            key={item._key}
                            title={<span><Icon type={item.icon}/><span>{item.title}</span></span>}>
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    )
                }
            })
        )
    };

    getOpenKey=(menuList,path)=>{
        for (let i=0;i<menuList.length;i++){
            let item = menuList[i];
            if (item.children && item.children.find(c_item =>{
                return c_item._key ===  path;
            })){
                return item._key;
            }

        }
    };

    componentDidMount() {
        getMenuList().then(result=>{

            if (result.status === 0) {
                this.setState({
                    menuList: result.data
                })
            }
        })
    }
    render() {
        let path = this.props.location.pathname;
        let openKey = this.getOpenKey(this.state.menuList,path);

        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo">
                    <img src={require('./../../../../asset/images/background.jpg')} alt=""/>
                    <span>后台管理</span>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[path]} defaultOpenKeys={[openKey]}>
                    {this.renderMenu(this.state.menuList)}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(LeftNav);