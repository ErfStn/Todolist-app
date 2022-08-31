const Todo = ({todo ,onCompleted,onDelete,onEdit}) => {
    return ( 
        <div className="todo">
            <div onClick={onCompleted} className={`textTodo ${todo.isCompleted ? "completed" : ""}`}>{todo.text}</div>
            <div>
                <button onClick={onEdit} className="btn" >Edit</button>
                <button onClick={onDelete} className="btn remove" >Delete</button>
            </div>
        </div>
     );
}
 
export default Todo;