import React, { useState } from 'react';

import './styles.css';

// Componente que da a forma a barra e botão de pesquisa para aplicar o filtro nas ferramentas
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