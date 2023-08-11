import './todoItem.scss';

export default function TodoItem(props) {
  // destrukturizuoti kad jsx galetumem sakyti tiesiog isDone, title
  const { isDone, title } = props.item;
  return (
    <li className='todoItem'>
      <span
        onClick={props.onToggle}
        className={isDone ? 'finished pointer red' : 'pointer'}
        role='button'
      >
        {title}
      </span>{' '}
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
}
