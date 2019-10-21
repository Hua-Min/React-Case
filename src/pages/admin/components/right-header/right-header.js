import React,{Component} from 'react';
import {Icon} from "antd";

import { Layout } from 'antd';
import PropTypes from "prop-types";

const { Header } = Layout;
class RightHeader extends Component{

    static propTypes = {
        collapsed: PropTypes.bool,
        toggle: PropTypes.func
    };


    render() {
        return(
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
            </Header>
        )
    }
}

export default RightHeader;