import React from 'react';

import './styles.css';

function ToolItem({ tool, handleDeleteTool }) {
  return (
    <li className="tool-item">
      <header>
        <div className="information">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8U82q5cB3rg4rjjBpvD1g4fwp1QK_u5Obo4hQusM5Ak4UNkX-&   usqp=CAU" alt="toolImage"/>
          <div className="tool-info">
            <strong>{tool.name}</strong>
            <span>{tool.tag}</span>
          </div>
        </div>
        <p>{tool.description}</p>
        <div className="delete-link">
          <div className="link-button">
            <button type="button"><a href={`https://${tool.link}/`}>LINK</a></button>
          </div>
          <div className="delete-button">
            <button onClick={() => handleDeleteTool(tool.tool_id)} type="button">REMOVE</button>
          </div>
        </div>
      </header>
    </li>
  );
}

export default ToolItem;