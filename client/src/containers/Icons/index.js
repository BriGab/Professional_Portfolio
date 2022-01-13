import React from "react";
import "./style.css";
import Text from '../../components/Text'
import { Row } from '../../components/LayoutHelpers';


const ICONS = ["icon  devicon-express-original", "icon devicon-postgresql-plain",
    "icon devicon-react-original-wordmark ", "icon devicon-nodejs-plain ", "icon devicon-graphql-plain-wordmark "]

function Icons() {


    return (
        <>
            <Text size="25px" >Techpertise:</Text>
            <Row>
                {ICONS.map((i) => {
                    return (
                        <i className={i} />
                    )
                })}
            </Row>
        </>
    )
}

export default Icons;