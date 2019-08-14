import * as React from "react";
import FullVideo from "../../resources/smallerLivePhotos/video-1564420351.mp4";

class VideoHeader extends React.Component{
 

   render() {
    return (
      <video  style={{borderStyle:"none"}} width="100%" height="100%" muted autoPlay loop>
<source src={FullVideo} type="video/mp4"/>
</video> 

    );
  }
}

export default VideoHeader;
