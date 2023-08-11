export default function TodoItem(props) {
  // destrukturizuoti kad jsx galetumem sakyti tiesiog isDone, title
  const { id, isDone, title } = props.item;
  return (
    <li>
      <span
        onClick={() => {}}
        className={isDone ? 'finished pointer' : 'pointer'}
        role='button'
      >
        {title}
      </span>{' '}
      <button onClick={() => props.onTest(id)}>Delete</button>
    </li>
  );
}
