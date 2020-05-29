import React, { useState } from 'react';

import './styles.css';

function ToolSearch({ handleSearchTool }) {
  const [search, setsearch] = useState('');

  return (
    <div className="search-block">
      <div className="sear">
        <input 
          placeholder="Procurar"
          value={search}
          onChange={event => setsearch(event.target.value)}
          />
          
        <button onClick={() => handleSearchTool(search)} type="button">PROCURAR</button>
      </div>
    </div>
  );
}

export default ToolSearch;