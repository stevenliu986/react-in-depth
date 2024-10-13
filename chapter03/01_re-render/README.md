## React组件重新渲染的例外情况

#### 通常情况下，组件会根据自身的state或传入的props的变化来进行重新渲染。但有个例外情况，如果state或props是由React内置的useRef这个Hook函数创建的ref对象，那么使用了这个ref对象的组件就不会重新渲染。
