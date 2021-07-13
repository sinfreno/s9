import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';
import React, {Component }from 'react';
import {Container, SB, VL, VD} from './styles/style';

class App extends Component {
  
  state ={
    videos: [],
    selectedVideo: null
  }


  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar    
      }   
    })
    this.setState({
      videos: response.data.items
    })  

  };

  handleVideoSelect = (video)=> {
    this.setState({selectedVideo: video})
  }


render() {
  return (
    <div >
      <SB ><SearchBar handleFormSubmit={this.handleSubmit}/> </SB>
        <Container >
          <VD >
            <VideoDetail video={this.state.selectedVideo}/>
          </VD>
          <VL >
            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
          </VL>
        </Container>
     </div>
  );
}
}

export default App;
