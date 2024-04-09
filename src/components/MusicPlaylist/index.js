import {Component} from 'react'

import {IoIosSearch} from 'react-icons/io'

import Playitem from '../PlayItem'

import './index.css'

class MusicPlaylist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playList: props.initialTracksList,
      inputValue: '',
    }
  }

  changeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  removeTrack = id => {
    const {playList} = this.state
    const updatedList = playList.filter(each => each.id !== id)
    this.setState({playList: updatedList})
  }

  render() {
    const {inputValue, playList} = this.state

    const searchResults = playList.filter(each =>
      each.name.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div>
        <div className="music-banner">
          <h1 className="player-name">Ed Sheeran</h1>
          <p className="player-role">Singer</p>
        </div>

        <div className="music-playlist-container">
          <div className="songs-search-container">
            <h1 className="play-songs-heading">Songs Playlist</h1>

            <div className="input-container">
              <input
                type="search"
                placeholder="Search"
                onChange={this.changeInputValue}
                value={inputValue}
              />
              <IoIosSearch color="white" />
            </div>
          </div>

          {searchResults.length === 0 ? (
            <div className="failure-container">
              <p className="failure-description">No Songs Found</p>
            </div>
          ) : (
            <ul>
              {searchResults.map(each => (
                <Playitem
                  key={each.id}
                  playDetails={each}
                  removeTrack={this.removeTrack}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MusicPlaylist
