import TasksItem from './TasksItem';
import { useTaskContext } from '../../context/context';

const TasksList = () => {
    const { tasks, setActiveTask, activeTask } = useTaskContext();

    const clickHandler = (task) => {
        if (task) {
            setActiveTask(task);
        }
    };

    return (
        <ul className="tasks-list">
            {
                tasks.map(task => {
                    const isActive = task.id ===  activeTask.id;

                    return (
                        <li key={task.id} onClick={() => clickHandler(task)} className="tasks-list__item">
                            <TasksItem {...task} isActive={isActive} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default TasksList;
