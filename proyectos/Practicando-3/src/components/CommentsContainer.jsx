/* eslint-disable */

import Comment from './Comment'
const CommentsContainer = ({comments}) => {
  return (
    <section className="comments-list">
      {comments
      .map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </section>
  )
}

export default CommentsContainer