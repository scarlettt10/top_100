import React from 'react';
import Todo from './Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <div className="row">
    { songs.map( song =>
        <Song
          key={song.id}
          {...song}
          updateSong={updateSong}
          deleteSong={deleteSong}
        />
      )
    }
  </div>
)

export default SongList;