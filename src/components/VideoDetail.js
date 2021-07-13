import React from 'react'
import {Detalle} from '../styles/style'

const VideoDetail = ({ video }) => {
  
    if(!video){
        return <div>
            Haz una busqueda!
        </div>;
    }


    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
      <Detalle >
        <div>
          <iframe style={{width: "100%", height: "400px"}} src={videoSrc} allowFullScreen title="Video player" />
        </div>
      <div >
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
      </div>  
      </Detalle>
    );
  };
  
  export default VideoDetail;