## React组件重新渲染的例外情况
#### 通常情况下，组件会根据自身的state或传入的props的变化来进行重新渲染。但有个例外情况，如果state或props是由useRef这个函数创建的ref对象，那么使用了这个ref对象的组件就不会重新渲染。


####   useRef的主要使用场景：
1. 存储 DOM 引用：可以用于获取和操作 DOM 元素。
2. 存储任意值：可以持久化存储一些不希望触发重新渲染的值。

```javascript

// 在这个例子中，useRef 创建了一个引用对象 myRef，并将它附加到输入元素上。点击按钮时，myRef.current 就会指向这个输入元素，并调用它的 focus 方法。
import { useRef } from 'react';

function MyComponent() {
  // 创建一个 ref 对象并初始化为 null
  const myRef = useRef(null);

  // 使用 ref 访问 DOM 元素
  const handleButtonClick = () => {
    myRef.current.focus();
  };

  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={handleButtonClick}>Focus the input</button>
    </div>
  );
}
```

```javascript
// useRef 可以接受一个初始值作为参数，这个初始值会赋给 current 属性。
// 在这个例子中，intervalRef 被用来存储 setInterval 返回的 ID，这样可以在 useEffect 的清理函数中使用 clearInterval 来清除定时器。

function Timer() {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <div>Timer is running, check the console</div>;
}
```
#### 小结
1. useRef 常用于持久化不希望触发重新渲染的值。
2. 通过 current 属性访问和修改。
3. 可用于获取 DOM 引用和存储任意值。
