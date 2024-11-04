import { useDispatch, useSelector } from "react-redux";
import { addThing } from "./dataReducer.js";

function App() {
  // state.thingReducer.data：thingReducer是指创建store时，指定的reducer的名称。而这里的data是指initialSate中的key(data)。也就是说，state是全局对象，保存了thingReducer这个对象，而这个对象是dataReducer生成的。
  const result = useSelector((state) => state.thingReducer.data);
  const dispatch = useDispatch();
  console.log(result);

  return (
    <>
      <h1>React Redux</h1>
      <ul>
        {result.things.map((thing, index) => (
          <li key={index}>{thing}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(addThing("world"))}>Add a thing</button>
    </>
  );
}

export default App;
