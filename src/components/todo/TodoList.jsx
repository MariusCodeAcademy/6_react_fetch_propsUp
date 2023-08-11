import { useState } from 'react';
import TodoItem from './TodoItem';
import './todoList.scss';
import AddTodo from './AddTodo';

const initTodos = [
  { id: 1, title: 'Do pushups', isDone: false },
  { id: 2, title: 'Buy Milk', isDone: true },
  { id: 3, title: 'Fly a Kite', isDone: false },
  { id: 4, title: 'Go to park', isDone: false },
];

/* 
jei idToDelete === 3 
tai setMainTodoArr funckija turim grazinti masyva kuris atrodo be elemento { id: 3, title: 'Fly a Kite', isDone: false },
Labai svarbu!!! Nemodifikuoti mainTodoArr
[
  { id: 1, title: 'Do pushups', isDone: false },
  { id: 2, title: 'Buy Milk', isDone: true },
  { id: 4, title: 'Go to park', isDone: false },
]
*/

export default function TodoList() {
  const [mainTodoArr, setMainTodoArr] = useState(initTodos);

  function handleDelete(idToDelete) {
    console.log('lets delete', idToDelete);
    // filter funkcija grazina nauja masyva reiskia nemodifikuojam orginalo
    const filtered = mainTodoArr.filter((tObj) => tObj.id !== idToDelete);
    // console.table(filtered);
    setMainTodoArr(filtered);
    // setMainTodoArr((prevTodoArr) => prevTodoArr.filter((tObj) => tObj.id !== idToDelete))
  }

  // handleAddTodo
  function handleAddTodo(newTodoValue) {
    // paimti input reiksme
    // sukurti nauja todoObjasdasdasdasd
    const newId = Math.random().toString().slice(4, 9);
    const newTodoObj = { id: newId, title: newTodoValue, isDone: false };
    console.log('newTodoObj ===', newTodoObj);
    // atnaujinti state su tuo todoObj nekeician tiesiogiai mainTodoArr

    // atnaujinam mainTodoArr su setMainTodoArr paduodami nauja masyva su pridetu nauju tObj
    setMainTodoArr([...mainTodoArr, newTodoObj]);
  }
  // handleToggleTodo
  function handleToggleTodo(idToToggle) {
    console.log('handleToggleTodo', idToToggle);
    // konkreciam, tam ant kurio paspaudem
    // pakeisti isDone i priesinga (nekeician orginalo)
    const pakeistasArr = mainTodoArr.map((tObj) => {
      // surandam elementa
      if (tObj.id === idToToggle) {
        /// radom
        // console.log('radom', tObj);
        // pakeisti jo kopijos isDone i priesinga
        // grazinti kopija
        // pasidarom kopija ir esama isDone keiciam i priesinga jam
        return { ...tObj, isDone: !tObj.isDone };
      }
      // neradom
      // grazinam ta pati el
      return tObj;
    });
    setMainTodoArr(pakeistasArr);
  }

  const mainArrayEmpty = mainTodoArr.length === 0;

  function testListFn(kazka) {
    console.log('i live in TodoList', kazka);
  }

  return (
    <div className='todoList'>
      <h2>Todo list</h2>

      <AddTodo onAddTodo={handleAddTodo} />

      {mainArrayEmpty && (
        <h2 className='noItems'>Nera nei vieno todo, pridekite nauja</h2>
      )}
      <ul>
        {mainTodoArr.map((tObj) => (
          <TodoItem
            key={tObj.id}
            item={tObj}
            onDelete={() => handleDelete(tObj.id)}
            onToggle={() => handleToggleTodo(tObj.id)}
          />
        ))}
      </ul>
    </div>
  );
}
