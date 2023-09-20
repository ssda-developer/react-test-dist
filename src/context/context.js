import { createContext, useContext, useEffect, useState } from 'react';

const TaskContext = createContext([]);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState(null);

    const addTask = (task) => {
        if (!activeTask) {
            setActiveTask(task);
        }
        setTasks([...tasks, task]);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);

        if (activeTask && activeTask.id === taskId) {
            const previousTask = tasks.find((task) => task.id !== taskId);
            setActiveTask(previousTask || null);
        }
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

        const updatedActiveTask = updatedTasks.find((task) => task.id === activeTask.id);
        setActiveTask(updatedActiveTask || null);
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

        const updatedActiveTask = updatedTasks.find((task) => task.id === activeTask.id);
        setActiveTask(updatedActiveTask || null);
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.setItem('activeTask', JSON.stringify(activeTask));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [tasks, activeTask]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        const storedActiveTask = localStorage.getItem('activeTask');

        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }

        if (storedActiveTask) {
            setActiveTask(JSON.parse(storedActiveTask));
        }
    }, []);

    return (
        <TaskContext.Provider
            value={{
                activeTask,
                setActiveTask,
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
