export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <div className="card">
        <p> count is {count}</p>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
      </div>
    </div>
  );
}
