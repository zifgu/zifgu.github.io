import {ImageInfo} from "../../pages/ProjectPage";
import {Figure} from "react-bootstrap";

export function ImageDemo(props: { image: ImageInfo }) {
    return (
        <div className="my-3">
            <Figure.Image
                src={props.image.imageSrc}
            />
            <Figure.Caption>
                {props.image.caption}
            </Figure.Caption>
        </div>
    );
}