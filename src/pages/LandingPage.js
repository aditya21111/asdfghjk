import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <div className='hero'>
                <h2>Welcome To</h2>
                <h1>health++</h1>
                <p>A one step solution to all your health problems</p>
            </div>
            <div className='features'>
                <div className='feature container'>
                    <img src='/uploads/6e8bbe840b' className='feature-icon'></img>
                    <div className='content-wrapper'>
                    <h3>Get personalized data</h3>
                    <Link to='/signup'>
                    <button className='btn btn-outline-primary'>Sign Up Now</button>
                    </Link>
                    </div>
                </div>
                <div className='feature bg-grey container'>
                    <div className='content-wrapper'>
                    <h3>Have a question?? Ask in QnA</h3>
                    <Link to='/qna'>
                    <button className='btn btn-outline-primary'>Visit QnA</button>
                    </Link>
                    </div>
                    <img src='http://localhost:5000/uploads/6e8bbe840b' className='feature-icon'></img>
                </div>
                <div className='feature container'>
                    <img src='/uploads/6e8bbe840b' className='feature-icon'></img>
                    <div className='content-wrapper'>
                    <h3>Get 1:1 consultancy from our experts</h3>
                    <Link to='/signup'>
                    <button className='btn btn-outline-primary'>Sign Up now</button>
                    </Link>
                    </div>
                </div>
                <div className='feature bg-grey container'>
                    <div className='content-wrapper'>
                    <h3>Useful blogs and health realted tips every week</h3>
                    <Link to='/articles'>
                    <button className='btn btn-outline-primary'>See Articles</button>
                    </Link>
                    </div>
                    <img src='/uploads/6e8bbe840b' className='feature-icon'></img>
                </div>
                <div className='feature container'>
                    <img src='/uploads/6e8bbe840b' className='feature-icon'></img>
                    <div className='content-wrapper'>
                    <h3>Yoga trainer, calculators and many useful tools</h3>
                    <Link to='/tools'>
                    <button className='btn btn-outline-primary'>Set calorie target</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
