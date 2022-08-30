import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completedTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    // set clone for dont mutate
    const selectedTodo = { ...todos[index] }
    selectedTodo.isCompleted = !selectedTodo.isCompleted; //=> revers
    //clone todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos)
  };
  return (
    <div className="container">
      <TodoForm
        addTodoHandler={addTodoHandler}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} onCompleted={completedTodo} />
    </div>
  );
};

export default TodoApp;
