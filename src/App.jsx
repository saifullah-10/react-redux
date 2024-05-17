import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incriment } from "./features/counter/counterSlice";
import Posts from "./Posts";

function App() {
  const count = useSelector((state) => state.counter);
  const disPatch = useDispatch();

  const totalCount = count.reduce((acc, value) => acc + value.count, 0);
  const onIncrement = (id) => {
    disPatch(incriment(id));
  };

  const onDecrement = (id) => {
    disPatch(decrement(id));
  };

  return (
    <>
      <h1>Redux + React</h1>
      {count.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.count}
          onDecrement={() => onDecrement(counter.id)}
          onIncrement={() => onIncrement(counter.id)}
        />
      ))}

      <p>Total Count: {totalCount}</p>

      <Posts />
    </>
  );
}

export default App;
