import { useState } from 'react';
import { useTaskContext } from '../../context/context';
import { generateRandomNineDigitNumber } from '../../helpers';

const TasksForm = () => {
    const [taskText, setTaskText] = useState('');
    const { addTask } = useTaskContext();

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addTask({ name: taskText, count: 0, id: generateRandomNineDigitNumber(), comments: [] });
        setTaskText('');
    };

    return (
        <form className="tasks-form" onSubmit={handleSubmit}>
            <input
                className="tasks-form__input"
                type="text"
                placeholder="Type name here..."
                required
                value={taskText}
                onChange={handleInputChange}
            />
            <button className="btn tasks-form__btn" type="submit">Add New</button>
        </form>
    );
};

export default TasksForm;
