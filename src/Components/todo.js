const Todo = ({todo ,onCompleted}) => {
    return ( 
        <div className="todo">
            <div className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
            <div>
                <button>Edit</button>
                <button>Remove</button>
                <button onClick={onCompleted}>Completed</button>
            </div>
        </div>
     );
}
 
export default Todo;