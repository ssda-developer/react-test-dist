const CommentsItem = ({ text, color }) => {
    return (
        <div className="comments-item">
            <div className="comments-item__color" style={{ background: color }}></div>
            <div className="comments-item__text">
                {text}
            </div>
        </div>
    );
};

export default CommentsItem;
