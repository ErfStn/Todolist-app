import Select from "react-select";
const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
]; 
const Navbar = ({ unCompletedTodos, selectHandler, status }) => {
  if (!unCompletedTodos) return <h2>Set your todays todo!</h2>;
  return (
    <header className="navBar">
      <span className="unCompletedTodos">{unCompletedTodos}</span>
      <h2>are not completed</h2>
          {/* <Select onChange={selectHandler} options={options} value={status} className="selectInput" /> */}
      <select onChange={selectHandler} value={status} className="selectInput">
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Uncompleted">Uncompleted</option>
      </select >
    </header>
  );
};

export default Navbar;
