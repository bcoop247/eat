import React, {useState} from'react';

const VideoUploader = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileSelection = () => {
    setSelectedVideo(event.target.files[0])

  }

  const handleSubmit = () => {
    event.preventDefault();
  }

}

export default VideoUploader;