import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHander = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo!");
      return;
    }
    props.addTodoHandler(input);

  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHander} />
      <button type="submit" value={input}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
