import React, {useState} from 'react'

const EditAnswer = ({content}) => {

    const [inputval, setInputval] = useState(content)

    return (
        <div>
           <input type='textarea' value={inputval} />
        </div>
    )
}

export default EditAnswer