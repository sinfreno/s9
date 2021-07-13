import React from 'react';


const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)}>
            <img style={{width: "100%"}} src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div >
                    <h6>{video.snippet.title}</h6>
            </div>
        </div>
    )
};
export default VideoItem;