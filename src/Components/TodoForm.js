import { useEffect, useRef, useState } from "react";

const TodoForm = props => {
	const [input, setInput] = useState(props.edit ? props.edit.text : "");
	const inputRef = useRef(null); //=> for focus
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	const changeHander = e => {
		setInput(e.target.value);
	};
	const submitHandler = e => {
		e.preventDefault();
		if (!input) {
			alert("enter todo!");
			return;
		}
		props.submitTodo(input);
		setInput("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="formContainer">
				<input
					type="text"
					value={input}
					placeholder={props.edit ? "Update todo ..." : "Add todo ..."}
					onChange={changeHander}
					ref={inputRef}
				/>
				<button
					type="submit"
					className={` ${props.edit ? "updateTodo" : "addTodo"}`}
					value={input}
				>
					{props.edit ? "Update" : "Add"}
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
