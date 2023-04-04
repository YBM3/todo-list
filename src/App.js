import React, { useEffect } from 'react';
import './App.scss';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState([ ]);

  const [toDoInput, setToDoInput] = useState("");

  const addToDo = () => {
    if (toDoInput === "") {
      alert("Please enter a task");
      return;
    }
    setToDo([...toDo, toDoInput]);
    setToDoInput("");
  }

  const deleteToDo = (index) => {
    const newToDo = [...toDo];
    newToDo.splice(index, 1);
    setToDo(newToDo);
  }

  const doneToDo = (index) => {
    const newToDo = [...toDo];

    if ( typeof newToDo[index] === "string") {
      newToDo[index] = <del className='App__item-done'>{toDo}</del>;
    }
    setToDo(newToDo);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setToDoInput(event.target.value);
  };

  return (
    <div className="App">
      <div className='App__header-container'>
        <div className="App__header">
          <span className='App__title' >To-Do List</span>
        </div>
        <div className="App__body">
          <from>
            <input 
              className='App__input'
              value={toDoInput} 
              onChange={handleChange}
              placeholder='Enter a task'
            />
            <button className='App__input-btn' onClick={addToDo}>Add</button>
          </from>
          <div className='App__list'>
            <div className='App__sort'>
            </div>
          {toDo.map((item, index) => {
            return (
              <div key={index} className='App__item'>
                <label className='App__item-title'>{item}</label>
                <div style={{display: 'flex',}}>
                  <button className="App__rmbtn" onClick={() => doneToDo(index)}>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" width="16" height="16" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4.009c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-14.051 8.382c-.165-.148-.249-.352-.249-.557 0-.411.333-.746.748-.746.178 0 .355.063.499.19l3.298 2.938 5.453-5.962c.149-.161.35-.243.554-.243.417 0 .748.337.748.747 0 .179-.065.359-.196.502l-5.953 6.509c-.147.161-.35.242-.552.242-.178 0-.357-.062-.499-.19z" fill-rule="nonzero"/></svg>
                  </button>
                  <button className="App__rmbtn" onClick={() => deleteToDo(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                  </button>
                </div>
              </div>
            )
          })}
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;
