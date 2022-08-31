import "./App.css";
import TodoApp from "./Components/TodoApp";

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoApp />
    </div>
  );
};

export default App;

// TodoApp : todos
// todo form => input + buttom => add todo
// todo list => todos.map(...) =>
