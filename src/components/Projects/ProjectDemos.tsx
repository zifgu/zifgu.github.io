import {VideoDemo} from "./VideoDemo";
import {ImageDemo} from "./ImageDemo";
import { PageSubheading } from "../PageSubheading";
import {ImageInfo, VideoInfo} from "../../data/DemoInfo";

export function ProjectDemos(props: {videos?: VideoInfo[], images?: ImageInfo[]}) {
    if (!props.videos && !props.images) {
        return null;
    }

    let imageDemos = null;
    if (props.images) {
        imageDemos = props.images.map((image) => {
            return <ImageDemo image={image} />;
        });
    }

    let videoDemos = null;
    if (props.videos) {
        videoDemos = props.videos.map((video) => {
            return <VideoDemo video={video} />;
        });
    }

    return (
        <div>
            <PageSubheading>Demos: </PageSubheading>
            {imageDemos}
            {videoDemos}
        </div>
    );
}