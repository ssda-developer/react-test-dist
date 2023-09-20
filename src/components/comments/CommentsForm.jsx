import { useState } from 'react';
import { useTaskContext } from '../../context/context';
import { generateRandomNineDigitNumber } from '../../helpers';

const CommentsForm = () => {
    const [commentText, setCommentText] = useState('');
    const [commentColor, setCommentColor] = useState('#000000');

    const { activeTask, addCommentToTask } = useTaskContext();

    const handleInputChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleColorChange = (e) => {
        setCommentColor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCommentToTask(activeTask.id, {
            text: commentText,
            color: commentColor,
            id: generateRandomNineDigitNumber()
        });
        setCommentText('');
    };

    return (
        <form className="comments-form" onSubmit={handleSubmit}>
            <input
                type="color"
                className="comments-form__color-input"
                value={commentColor}
                onChange={handleColorChange}
            />
            <textarea
                className="comments-form__text-input"
                placeholder="Type comment here..."
                required
                value={commentText}
                onChange={handleInputChange}
            />
            <button className="comments-form__submit-btn" type="submit">Add New</button>
        </form>
    );
};

export default CommentsForm;
