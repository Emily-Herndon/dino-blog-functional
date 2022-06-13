import Comment from './Comment'

const Post = (props) => {
    return (
        <>
            <h2>{props.post.title}</h2>
            <h3>{props.post.author}</h3>
            <p>{props.post.body}</p>
            <ul>
                {props.post.comments.map((item, index) => (
                    <Comment
                        key={`comment-${index}`}
                        message={item}
                    />
                ))}
            </ul>
        </>
    )
}
export default Post
