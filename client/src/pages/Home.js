import React from "react";
import CopyRight from "../components/CopyRight";
import Icons from "../containers/Icons";
import "../style/style.css";
import Layout from '../containers/layout';
import Name from '../components/Name';
import Text from '../components/Text';
import { Row } from '../components/LayoutHelpers';

function Home() {

    return (
        <Layout>
            <Name />
            <Row>
                <Text>
                    A business minded problem solving professional who made her way into software engineering and will never look back. I love solving nuiance in admin systems and reducing redundancies in day to day work. I'm passionate about what I build and how I build it.
                </Text>
                <Text size="20px">
                    How can I make your job easier?
                </Text>
            </Row>
            <Row>
                <Icons />
            </Row>
            <CopyRight />
        </Layout >

    )
}

export default Home;