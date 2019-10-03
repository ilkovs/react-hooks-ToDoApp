import React, { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
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
      <p>Click count: <span>{count}</span></p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <p className="title">To Do list:</p>
      <input type="text" placeholder="type here..." onChange={getUserInput} />
      <button onClick={addNewToDo}>Add a To Do</button>
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