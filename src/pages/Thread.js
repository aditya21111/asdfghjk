import axios from 'axios'
import React, {useEffect, useState} from 'react'
import swal from 'sweetalert'

import AnswerCard from '../components/qna/AnswerCard'

const Thread = ({match}) => {

    const [question, setQuestion] = useState(null)

    const fetchData = async function(){
        try {
            const res = await axios.get(`/qna/${match.params.id}`)
            setQuestion(res.data.qna)
        } catch (err) {
            console.log(err.response)
            swal({
                title: "Error !",
                text: `${err.response ? err.response.data.message : "An error occured!"}`,
                icon: "error",
                button: "Try Again",
              })
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            {question && 
            <React.Fragment>
            <div className='question'>
            <p>{question.content}</p>
            <div className='q-user-info'>
                <img src={`/uploads/${question.profile}`} /><p>{question.username}</p>
                <span>{question.postedAt}</span>
            </div>
        </div>

        <div className='answers'>
            {question.answers.map((ans, id) => {
                return <AnswerCard 
                    username={ans.username}
                    profile={ans.profile}
                    email={ans.email}
                    answer={ans.answer}
                    postedAt={ans.createdAt}
                />
            })}
        </div>
        
        </React.Fragment>}
        </div>
    )
}

export default Thread
