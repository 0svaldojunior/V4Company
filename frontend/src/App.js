import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './css/Sidebar.css';
import './css/Header.css';
import './css/Main.css';

import ToolItem from './components/ToolItem';
import ToolForm from './components/ToolForm';
import ToolSearch from './components/ToolSearch';

function App() {
  const [tools, settools] = useState([]);

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('/tools');
      settools(response.data);
    }
    loadTools();
  }, []);

  async function handleAddTool(data) {
    try {
      const response = await api.post('/tools', data);
  
      settools([...tools, response.data]);
      window.location.reload(false);
    } catch (error) {
      alert('Erro ao cadastrar a ferramenta, verifique e tente novamente');
    }
  }

  async function handleDeleteTool(id) {
    try {
      await api.delete(`/tools?tool_id=${id}`, {
        data: {
          tool_id: id
        }
      });
      settools(tools.filter(tool => tool.tool_id !== id));
    } catch (error) {
        alert('Erro ao deletar a ferramenta, verifique e tente novamente');
    }
  }

  async function handleSearchTool(tag) {
    try {
      if(tag.trim() !== '') {
        await api.get(`tools/search?tag=${tag}`, {
        query: {
          data: tag
        }
        });

        settools(tools.filter(tool => tool.tag.includes(tag)));
      } else {
        const response = await api.get('/tools');
        settools(response.data);
      }
    } catch (error) {
      alert('Erro ao filtar ferramentas por tag, verifique e tente novamente');
    }
  }

  const generaterKey = (prefix) => {
    return `${prefix}-${new Date().getTime()}`;
  }
  
  return (
    <div id="app">
      <header>
      <div className="title">
        <h1>VUTTER</h1>
      </div>

      <div className="subtitle">
        <h2>Very Useful Tools to Remember</h2>
      </div>

      <ToolSearch handleSearchTool={handleSearchTool}/>
      </header>
      <div className="row">
        <aside>
          <strong>Cadastrar</strong>
          <ToolForm onSubmit={handleAddTool}/>
        </aside>

        <main>
          <ul>
            {tools.map(tool => (
              <ToolItem 
                key={generaterKey(tool.name)} 
                tool={tool} 
                handleDeleteTool={handleDeleteTool}
              />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
