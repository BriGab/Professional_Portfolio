import React from "react";
import { Layout } from 'antd';
import { Carousel } from 'antd';
import Portfolio from "./Portfolio";
import Text from '../components/Text';

const { Content, Sider } = Layout;

const layout = ({ children }) => {


    return (

        <Layout>

            <Content style={{ padding: '50px', height: '100%' }} >

                {children}

            </Content>

            <Sider>
                <Text>Hello</Text>
            </Sider>
            {/* <Sider width="20%">
                <Portfolio />
            </Sider> */}


        </Layout>

    )
}

export default layout;
