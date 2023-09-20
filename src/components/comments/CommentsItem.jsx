const CommentsItem = ({ text, color }) => {
    return (
        <div className="comment-item">
            <div className="comment-item__color" style={{ background: color }}></div>
            <div className="comment-item__text">
                {text}
            </div>
        </div>
    );
};

export default CommentsItem;
