import React, {useState} from 'react'
import swal from 'sweetalert'
import {Button} from 'react-bootstrap'

const Comments = ({comments}) => {

    const postData = async () => {
        try {
            console.log("pressed")
        } catch (err) {
            console.log(err.response)
            swal({
                title: "Error !",
                text: `${err.response.data.message}`,
                icon: "error",
                button: "Try Again",
              })
        }
    }

    const [commentVal, setCommentVal] = useState('')
console.log(comments)
    return (
        <div className='comments container'>
            <hr />
            <h2>Comments</h2>
            <input type="text" name="comment" value={commentVal} className='form-control' onChange={(e) => setCommentVal(e.target.value)} />
            <button className='btn btn-o-green' onClick={postData}>Post</button>
            <div className='comments-list' style={{marginTop: "20px"}}>
                {comments && comments.map((comm, index) => {
                    return <CommentCard 
                                key={index}
                                comment={comm}
                            />
                })}
            </div>
        </div>
    )
}

const commentStyles = {
    padding: "10px",
    borderTop: "1px solid rgba(0,0,0, 0.2)",
    borderBottom: "1px solid rgba(0,0,0, 0.2)"
}

const CommentCard = ({comment}) => {
    return(
        <div className='comment-card' style={commentStyles}>
            <p style={{margin: '0'}}>{comment.comment}</p>
            <div style={{display: "flex", alignItems: "center", justifyContent:'space-between'}}>
                <p>{comment.username}</p>
                <p style={{margin: '0'}} className='text-muted'>{comment.postedAt}</p>
            </div>
        </div>
    )
}

export default Comments
