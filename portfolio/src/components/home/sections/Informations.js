import React from 'react'

import {Informations} from "../../../style/home/Home";
import Row from "../../layout/Row";
import Col from "../../../style/layout/Col";

class InformationsComponent extends React.Component {
    render() {
        return (
            <Informations>
                <Row>
                    <Col colLg={4} colMd={12}>
                        aasd
                    </Col>
                    <Col colLg={4} colMd={12}>
                        aasd
                    </Col>
                    <Col colLg={4} colMd={12}>
                        aasd
                    </Col>
                </Row>
            </Informations>
        )
    }
}

export default InformationsComponent;
