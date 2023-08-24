const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <span 
                onClick={ () => onToggleTodo(todo.id)}
                className={`${todo.done ? 'text-decoration-line-through' : ''}`
            }>
                {todo.desc}
            </span>
            <button 
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo.id)}
            >Borrar</button>
        </li>
    );
};

export default TodoItem;