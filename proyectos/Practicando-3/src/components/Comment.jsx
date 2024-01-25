/* eslint-disable */

const Comment = ({comment}) => {
  return (
    <div className="comment-container" key={comment.id} >
      <div className="comment-id">
        <b>Id: </b> {comment.id}
      </div>
      <div className="comment-name"> 
        <b>Nombre: </b>  {comment.name}
      </div>
      <div className="comment-body">
        <b>Contenido: </b>  {comment.body}
      </div>
    </div>
  )
}

export default Comment