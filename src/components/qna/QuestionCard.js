import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const QuestionCard = ({id, username, profile, content, postedAt}) => {
    return (
        <div className='question-card'>
            <p>{content}</p>
            <div className='q-user-info'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <img className='user-avatar' src={`/uploads/${profile}`} /><h3 style={{marginLeft: '10px'}}>{username}</h3>
                </div>
                <span>{postedAt}</span>
            </div>
            <Link to={`/qna/${id}`}>See</Link>
        </div>
    )
}

export default QuestionCard
