import {VideoInfo} from "../../pages/ProjectPage";
import {Figure} from "react-bootstrap";

export function VideoDemo(props: { video: VideoInfo }) {
    return (
        <div className="my-3">
            <div className="ratio ratio-16x9 my-2">
                <iframe src={props.video.videoSrc}
                        allowFullScreen
                        title={"YouTube video player"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
            <Figure.Caption>
                {props.video.caption}
            </Figure.Caption>
        </div>
    );
}