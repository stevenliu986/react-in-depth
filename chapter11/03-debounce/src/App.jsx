import { useCallback, useState } from "react";
import { debounce } from "lodash";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  // 防抖函数，延迟更新最终状态。注意：这里必须要使用useCallback函数以确保在input输入导致的重新渲染后不会生成新的debouncedSetValue函数，依赖数组可以为空，这样可以确保防抖函数在组件的生命周期内只创建一次，并实现正确的防抖效果。
  const debouncedSetValue = useCallback(debounce(setDebouncedValue, 2000), []);
  const handleChange = (e) => {
    const nextValue = e.target.value;
    setDisplayValue(nextValue); // 立即更新显示状态
    debouncedSetValue(nextValue); // 延迟更新最终状态
  };
  return (
    <>
      {" "}
      <h1>Hello world</h1>
      <fieldset>
        <legend>Debounce</legend>
        <label htmlFor="">
          {" "}
          请输入你的搜索内容：{" "}
          <input value={displayValue} onChange={handleChange} />
          <h3>即时显示值: {displayValue}</h3>{" "}
          <h3>延迟显示值: {debouncedValue}</h3>
        </label>
      </fieldset>
    </>
  );
}

export default App;
