import * as React from "react";
import FullVideo from "../../resources/subscribe-mute.mp4";

class Video extends React.Component{
 

   render() {
    return (
      <video  id="myVideo" style={{borderStyle:"none"}}  muted autoPlay loop>
        <source src={FullVideo} type="video/mp4"/>
      </video> 

    );
  }
}

export default Video;
