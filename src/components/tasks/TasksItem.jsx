import { useTaskContext } from '../../context/context';

const TasksItem = ({ name, id, comments, isActive }) => {
    const { deleteTask } = useTaskContext();

    const deleteHandler = (e) => {
        e.stopPropagation();
        deleteTask(id)
    };

    return (
        <div className={`tasks-item ${isActive ? 'is-active' : ''}`}>
            <span className="tasks-item__name">{name}</span>
            <span className="tasks-item__comment-count">{comments.length}</span>
            <button onClick={deleteHandler} className="tasks-item__delete-btn btn btn-outline-danger">Delete</button>
        </div>
    );
};

export default TasksItem;
