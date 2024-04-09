import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const Playitem = props => {
  const {playDetails, removeTrack} = props

  const {id, imageUrl, name, genre, duration} = playDetails

  const deleteTrack = () => {
    removeTrack(id)
  }

  return (
    <li>
      <div className="left-container">
        <img src={imageUrl} alt="track" />

        <div className="info-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>

      <div className="right-container">
        <p className="duration">{duration}</p>

        <button
          type="button"
          aria-label="delete"
          onClick={deleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}

export default Playitem
