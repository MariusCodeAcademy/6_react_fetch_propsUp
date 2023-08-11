import { useState } from 'react';

export default function AddTodo(props) {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  function inputTodo(event) {
    setNewTodoTitle(event.target.value);
  }

  function handleNewTodoInput() {
    // neleisti prideti tuscio todo item
    if (newTodoTitle === '') return;

    props.onAddTodo(newTodoTitle);
    // isvalyti input
    setNewTodoTitle('');
  }

  return (
    <fieldset>
      <legend>Add Todo</legend>
      <input
        onChange={inputTodo}
        value={newTodoTitle}
        type='text'
        placeholder='new todo'
      />
      <button onClick={handleNewTodoInput}>Add</button>
    </fieldset>
  );
}
