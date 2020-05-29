import React, { useState } from 'react';

import './styles.css';

function ToolForm({ onSubmit }) {
  const [name, setname] = useState('');
  const [link, setlink] = useState('');
  const [description, setdescription] = useState('');  
  const [tag, settag] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault(); 
    await onSubmit({
      name,
      link,
      tag,
      description,
    });

    setname('');
    setlink('');
    settag('');
    setdescription('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <input 
          placeholder="Nome" 
          value={name}
          onChange={event => setname(event.target.value)}
        />
      </div>
      
      <div className="input-block">
        <input 
          placeholder="Link"
          value={link}
          onChange={event => setlink(event.target.value)}
        />
      </div>

      <div className="input-block">
        <input
          placeholder="Tag"
          valeu={tag}
          onChange={event => settag(event.target.value)}
        />
      </div>

      <div className="input-block">
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={event => setdescription(event.target.value)}
        />
      </div>

      <button type="submit">SALVAR</button>
    </form>
  );   
}

export default ToolForm;