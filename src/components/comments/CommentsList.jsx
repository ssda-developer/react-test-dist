import CommentsItem from './CommentsItem';
import { useTaskContext } from '../../context/context';

const CommentsList = () => {
    const { activeTask } = useTaskContext();

    return (
        <ul className="comments-list">
            {
                activeTask?.comments.map(comment => {
                    return (
                        <li key={comment.id} className="comments-list__item">
                            <CommentsItem {...comment}/>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default CommentsList;
