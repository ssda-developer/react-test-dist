import TasksItem from './TasksItem';
import { useTaskContext } from '../../context/context';

const TasksList = () => {
    const { tasks, setActiveTask } = useTaskContext();

    return (
        <ul className="tasks-list">
            {
                tasks.map(task => {
                    return (
                        <li key={task.id} onClick={() => setActiveTask(task)} className="tasks-list__task">
                            <TasksItem {...task} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default TasksList;
