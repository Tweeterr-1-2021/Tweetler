
import React from 'react'

const Comment = ({ comment }) => {

    // console.log('comment', comment)
    return (
        <div className='comments'>
            <div className='comments_img' style={{ backgroundImage: `url(${comment.userImage})` }} ></div>
            <div className='comments_details'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className='comments_name'>{comment.user}</p>
                    <p className='comments_date'>{comment.time.split('T')[0] + '  at ' + comment.time.split('T')[1].split('.')[0]}</p>
                </div>
                <p>
                    {comment.comment}
                </p>
            </div>
        </div>
    )
}

export default Comment
