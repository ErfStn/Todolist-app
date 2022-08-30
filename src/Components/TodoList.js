import Todo from "./todo";

const TodoList = ({ todos ,onCompleted }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;

    return todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} onCompleted={()=>onCompleted(todo.id)} />;
    });
  };
  return <div>{renderTodos()}</div>;
};

export default TodoList;
