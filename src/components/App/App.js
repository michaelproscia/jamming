import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Evil Woman", artits: "ELO", album: "Face the Music", id: 1 },
        { name: "Peace of Mind", artits: "Boston", album: "Boston", id: 2 },
        {
          name: "Reptilia",
          artits: "The Strokes",
          album: "Room on fire",
          id: 3,
        },
      ],
      playlistName: "Rock Mix",
      playlistTracks: [
        { name: "Evil Woman", artits: "ELO", album: "Face the Music", id: 4 },
        { name: "Peace of Mind", artits: "Boston", album: "Boston", id: 5 },
        {
          name: "Reptilia",
          artits: "The Strokes",
          album: "Room on fire",
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }
    this.setState({ playlistTracks: [...this.state.playlistTracks, track] });
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(
        (savedTrack) => savedTrack.id !== track.id
      ),
    });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
