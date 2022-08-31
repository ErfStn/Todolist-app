import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status,setStatus]=useState("All")

  useEffect(() => {
    filterTodos(status) // value
  }, [todos, status])
  
  const addTodo = (input) => {
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
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted; //=> revers
    //clone todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const filteredTodo = todos.filter((t) => t.id !== id);
    setTodos(filteredTodo);
  };
  const updateTodo = (id, newInputValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newInputValue; //=> revers
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const selectHandler = (e) => {
    setStatus(e.target.value) // e
    filterTodos(e.target.value) // without target
}
  return (
    <div className="container">
      <Navbar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        filterTodos={filterTodos}
        selectHandler={selectHandler}
        status={status}
      />
      <TodoForm submitTodo={addTodo} todos={todos} setTodos={setTodos} />
      <TodoList
        todos={filteredTodos}
        onCompleted={completedTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
