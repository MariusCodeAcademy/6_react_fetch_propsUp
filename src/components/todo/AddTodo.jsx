import { useState } from 'react';

export default function AddTodo(props) {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  function inputTodo(event) {
    setNewTodoTitle(event.target.value);
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
      <button onClick={() => props.onAddTodo(newTodoTitle)}>Add</button>
    </fieldset>
  );
}
