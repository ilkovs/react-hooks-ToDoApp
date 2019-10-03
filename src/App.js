import React, { useState } from 'react'
import './App.scss'
import Clock from 'react-live-clock';

function App() {
  const [newToDo, setNewToDo] = useState('')
  const [toDos, addToDo] = useState([])

  function getUserInput(e) {
    e.preventDefault()
    setNewToDo(e.target.value)
    // console.log(newToDo)
  }

  function addNewToDo(e) {
    e.preventDefault()
    addToDo([...toDos, newToDo])
    //clear the field once to-do is submitted
    let button = e.target
    let currentInput = button.previousElementSibling
    currentInput.value = '';
  }

  function removeToDo(e) {
    let child = e.target
    let parent = child.parentNode
    // console.log(parent.id)
    let index = parent.id
    toDos.splice(index, 1)
    addToDo([...toDos])
  }


  return (

    <div>
      <p className="title">Daily To-Do List:</p>
      <p className="time">The Time: <Clock format={'HH:mm:ss'} ticking={true} className="clock"/></p>
      <input type="text" placeholder="Add a To-Do..." onChange={getUserInput} />
      <button onClick={addNewToDo}>Save</button>
      <p>{toDos.length > 0 ? `You have ${toDos.length} ${toDos.length < 2 ? 'To Do' : "To Do's"} in your list.` : ''}</p>
      <ul>
        {toDos.map((singleToDo, id) => (
          <li key={id} id={id}>{singleToDo} <span onClick={removeToDo}>X</span></li>
        ))}
      </ul>
    </div>
  )
}

export default App