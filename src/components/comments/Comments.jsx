import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';
import { useTaskContext } from '../../context/context';

const Comments = () => {
    const { activeTask } = useTaskContext();

    return (
        <div className="comments">
            <div className="comments__content">
                <h1 className="comments__title">Comments #{activeTask?.id}</h1>
                <CommentsList />
                <CommentsForm />
            </div>
        </div>
    );
};

export default Comments;
