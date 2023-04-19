const Todo = ({ todo, onCompleted, onDelete, onEdit }) => {
	return (
		<div className="todo">
			<div
				onClick={onCompleted}
				className={`textTodo ${todo.isCompleted ? "completed" : ""}`}
			>
				<input type="checkbox" checked={todo.isCompleted} />
				<span>{todo.text}</span>
			</div>
			<div>
				<button onClick={onEdit} className="btn">
					Edit
				</button>
				<button onClick={onDelete} className="btn remove">
					Delete
				</button>
			</div>
		</div>
	);
};

export default Todo;
