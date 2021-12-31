import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {ProjectCard} from "../components/ProjectCard";

export function Projects() {
    return (
        <Container className="my-4">
            <Row className="row-cols-1 row-cols-lg-2 gy-3">
                <ProjectCard projectName={"Project 1"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel. In vitae turpis massa sed elementum tempus egestas sed. Fringilla est ullamcorper eget nulla facilisi etiam. Mi ipsum faucibus vitae aliquet nec.
                </ProjectCard>
                <ProjectCard projectName={"Project 2"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel. In vitae turpis massa sed elementum tempus egestas sed. Fringilla est ullamcorper eget nulla facilisi etiam. Mi ipsum faucibus vitae aliquet nec.
                </ProjectCard>
                <ProjectCard projectName={"Project 3"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel. In vitae turpis massa sed elementum tempus egestas sed. Fringilla est ullamcorper eget nulla facilisi etiam. Mi ipsum faucibus vitae aliquet nec.
                </ProjectCard>
            </Row>
        </Container>
    )
}