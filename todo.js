function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping:", index);
    remove(index);
  }

  const isOdd = (index) => {
    if (index % 2) {
      let name = "todo-pair";
      return name;
    } else {
      let name = "todo-odd";
      return name;
    }
  };

  return (
    <div className="todo">
      <div className="todo-star">⭐</div>
      <div className={isOdd(index)}>{todo.text}</div>
      <div className="todo-close" onClick={handle}>
        ❌
      </div>
    </div>
  );
}
