import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

export function Attribution() {
    return (
        <Row className="py-5 px-2 justify-content-center" style={{height: "75vh"}}>
            <Col md={7}>
                <h3 className="my-3">
                    Attributions
                </h3>
                <p>
                    The following icons were used in this site:
                </p>
                <IconAttributionList />
            </Col>
        </Row>
    );
}

function IconAttributionList() {
    return (
        <ul>
            <li>
                <a href="https://fontawesome.com/icons/linkedin-in">"linkedin-in"</a> from Font Awesome is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
            </li>
            <li>
                "moon", "sunny", "mail" from <a href="https://ionic.io/ionicons">Ionicons</a> are licensed under the <a href="https://github.com/ionic-team/ionicons/blob/main/LICENSE">MIT license</a>
            </li>
            <li>
                "menu", "github" by Cole Bemis (<a href="https://feathericons.com/">Feather</a>) are licensed under the <a href="https://github.com/feathericons/feather/blob/master/LICENSE">MIT license</a>
            </li>
            <li>
                <a href="https://icons.getbootstrap.com/icons/stars/">"stars"</a> from <a href="https://github.com/twbs/icons">Bootstrap Icons</a> is licensed under the <a href="https://opensource.org/licenses/MIT">MIT license</a>
            </li>
        </ul>
    );
}