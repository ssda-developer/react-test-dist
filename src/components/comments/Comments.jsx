import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';
import { useTaskContext } from '../../context/context';

const Comments = () => {
    const { activeTask } = useTaskContext();

    return (
        <div className={`comments ${!activeTask ? 'disabled' : ''}`}>
            <div className="comments__content">
                <h2 className="comments__title">Comments #{activeTask?.id}</h2>
                <CommentsList />
                <CommentsForm />
            </div>
        </div>
    );
};

export default Comments;
