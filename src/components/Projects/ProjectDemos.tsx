import {ImageInfo, ProjectSubheading, VideoInfo} from "../../pages/ProjectPage";
import {VideoDemo} from "./VideoDemo";
import {ImageDemo} from "./ImageDemo";

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
            <ProjectSubheading>Demos: </ProjectSubheading>
            {imageDemos}
            {videoDemos}
        </div>
    );
}