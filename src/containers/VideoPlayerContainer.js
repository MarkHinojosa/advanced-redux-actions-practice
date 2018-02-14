// * VideoPlayerContainer.js
// * map a prop called `URL` to the state `videoURL`
// * map a prop called `scale` to the state `videoScale`

import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

function mapStateToProps(state){
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);