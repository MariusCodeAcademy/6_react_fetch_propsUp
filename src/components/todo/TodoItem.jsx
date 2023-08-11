export default function TodoItem(props) {
  // destrukturizuoti kad jsx galetumem sakyti tiesiog isDone, title
  return (
    <li>
      <span
        onClick={() => {}}
        className={props.item.isDone ? 'finished pointer' : 'pointer'}
        role='button'
      >
        {props.item.title}
      </span>{' '}
      <button onClick={() => {}}>Delete</button>
    </li>
  );
}
