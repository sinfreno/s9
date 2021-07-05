import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import {Container, SB, VL, VD} from './styles/style';
import youtube from './apis/youtube';
import React, {Component }from 'react';

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

  };

  handleVideoSelect = (video)=> {
    this.setState({selectedVideo: video})
  }

  



render() {
  return (
    <div>
    <SB>
        <SearchBar />
    </SB>
    <Container>
      <VD>
        <VideoDetail />
      </VD>
      <VL>
        <VideoList />
      </VL>
    </Container>
    </div>
  );
}
}

export default App;
