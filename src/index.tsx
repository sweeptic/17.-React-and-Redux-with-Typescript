import ReactDOM from 'react-dom';
import React from 'react';

interface AppProps {
  //   color: string;
  color?: string; // optional
}

const App: React.FC<AppProps> = (props): JSX.Element => {
  const [counter, setCounter] = React.useState(0);

  const onIncrement = (): void => setCounter(prev => prev + 1);

  const onDecrement = (): void => setCounter(prev => prev - 1);

  //
  //
  function insertAtBeginning<T>(array: T[], value: T) {
    return [...array, value];
  }

  insertAtBeginning([1, 2, 3], 4);
  insertAtBeginning(['1', '2', '3'], '4');

  const items = [
    { name: 'Mark', age: 33 },
    { name: 'John', age: 13 },
    { name: 'Vilma', age: 53 },
  ];

  return (
    <div>
      hello there {props.children}
      hello there {props.color}
      <MyForm onAddIncrement={onIncrement} />
      <MakeList items={items} />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <div>{counter}</div>
    </div>
  );
};

const MyForm: React.FC<{ onAddIncrement: () => void }> = () => {
  const myFormInputRef = React.useRef<HTMLInputElement>(null);
  const [enteredText, setEnteredText] = React.useState('');
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const [text, setText] = React.useState<string>('default');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setEnteredText(myFormInputRef.current!.value);
    // setText(2)
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' ref={myFormInputRef} />
        <button>add</button>
      </form>
      <span>{enteredText}</span>
    </div>
  );
};

class Todo {
  name: string;
  age: number;

  constructor(name_: string, age_: number) {
    this.name = name_;
    this.age = age_;
  }
}

// interface Todo {
//   name: string;
//   age: number;
// }

interface TodoProps {
  items: Todo[];
}

const MakeList: React.FC<TodoProps> = ({ items }) => {
  return (
    <>
      {items.map((item: Todo) => (
        <li key={item.name}>
          name: {item.name}
          age: {item.age}
        </li>
      ))}
    </>
  );
};

// const App = (props: AppProps): JSX.Element => {
//   const [counter, setCounter] = React.useState(0);

//   const onIncrement = (): void => setCounter(prev => prev + 1);

//   const onDecrement = (): void => setCounter(prev => prev - 1);

//   return (
//     <div>
//       hello there {props.color}
//       <button onClick={onIncrement}>Increment</button>
//       <button onClick={onDecrement}>Decrement</button>
//       <div>{counter}</div>
//     </div>
//   );
// };
//
//
//
//
//
//
//
//
//
//

ReactDOM.render(<App color='red' />, document.querySelector('#root'));
