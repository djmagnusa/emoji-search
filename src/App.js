import React, {useState, useEffect} from 'react'
import EmojiData from './Emoji.json';

const App = () => {

  const [search, setSearch] = useState('');

  useEffect(() => {

  }, [search]);

  return (
    <div>
      <center>
          <h1>Emoji Search</h1>
          <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </center>       
      {EmojiData.data}
    </div>
  )
}

export default App
