import { useTaskContext } from '../../context/context';

const TasksItem = ({ name, id, comments }) => {
    const { deleteTask } = useTaskContext();

    return (
        <div className="task-item">
            <span className="task-item__name">{name}</span>
            <span className="task-item__comment-count">{comments.length}</span>
            <button onClick={() => deleteTask(id)} className="task-item__delete-btn btn btn-outline-danger">Delete</button>
        </div>
    );
};

export default TasksItem;
