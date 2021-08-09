import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [] };

  onSearchTermSubmit = async (term) => {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY);
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
