import axios from 'axios'
import React, {useState, useEffect} from 'react'
import swal from 'sweetalert'

import Loader from '../../layout/Loader'
import IDontKnowWhatToNameIt from './IDontKnowWhatToNameIt'

const Questions = () => {

    const [questions, setQuestions] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            
            const res = await axios.get(`https://healthplusplus.herokuapp.com/qna/q/all/${localStorage.getItem('userID')}`)
            setQuestions(res.data.questions)

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

    const onEdit = async(id, content) => {
        try {
            setLoading(true)
            const res = await axios.put(`https://healthplusplus.herokuapp.com/qna/q/${id}`, {
                answer: content,
                password: localStorage.getItem("authKey")
            })
            
            swal({
                title: 'Success',
                text: res.data.message,
                icon: 'success',
                button: 'OK'
            })
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err.response)
            swal({
                title: "Error !",
                text: `${err.response ? err.response.data.message : "An error occured!"}`,
                icon: "error",
                button: "Try Again",
              })
        }
    }

    const onDelete = async (id) => {
        try {
            setLoading(true)
            const res = await axios.delete(`https://healthplusplus.herokuapp.com/qna/q/${id}`, {
                data: {
                    password: localStorage.getItem("authKey")
                }
            })
            swal({
                title: 'Success',
                text: res.data.message,
                icon: 'success',
                button: 'OK'
            })
            setLoading(false)
        } catch (err) {
            setLoading(false)
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
            {
                questions ? questions.map((ans, i) => {
                    return <IDontKnowWhatToNameIt 
                        content={ans.answer}
                        edit={onEdit}
                        del={onDelete}
                        id={ans._id}
                        loading={loading}
                    />
                }) : <Loader />
            }
        </div>
    )
}

export default Questions
