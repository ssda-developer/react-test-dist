import { createContext, useContext, useState } from 'react';

const TaskContext = createContext([]);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, task]);

        if (!activeTask) { //TODO: check this code
            setActiveTask(task);
        }
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const addCommentToTask = (taskId, comment) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    comments: [...task.comments, comment],
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteCommentFromTask = (taskId, commentId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    comments: task.comments.filter((comment) => comment.id !== commentId),
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <TaskContext.Provider
            value={{
                activeTask, setActiveTask,
                tasks,
                addTask,
                deleteTask,
                addCommentToTask,
                deleteCommentFromTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
};
