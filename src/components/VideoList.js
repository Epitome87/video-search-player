import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos }) {
  return (
    <div className='ui relaxed divided list'>
      {videos.map((video) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
}

export default VideoList;
