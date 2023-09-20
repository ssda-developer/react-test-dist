import TasksList from './TasksList';
import TasksForm from './TasksForm';

const Tasks = () => {
    return (
        <div className="tasks">
            <div className="tasks__content">
                <h2 className="tasks__title">Items</h2>
                <TasksForm />
                <TasksList />
            </div>
        </div>
    );
};

export default Tasks;
