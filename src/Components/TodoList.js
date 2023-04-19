import { useState } from "react";
import Todo from "./todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onCompleted, onDelete, onUpdateTodo }) => {
	const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

	const editTodo = newInputValue => {
		onUpdateTodo(edit.id, newInputValue);
		setEdit({ id: null, text: "", isCompleted: false });
	};
	const renderTodos = () => {
		if (todos.length === 0) return <p>add some todos</p>;

		return todos.map(todo => {
			return (
				<Todo
					todo={todo}
					key={todo.id}
					onCompleted={() => onCompleted(todo.id)}
					onDelete={() => onDelete(todo.id)}
					onEdit={() => setEdit(todo)}
				/>
			);
		});
	};
	return (
		<>
			{edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
		</>
	);
};

export default TodoList;
