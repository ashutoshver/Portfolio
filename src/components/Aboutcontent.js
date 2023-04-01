import React from 'react';
import './aboutcontent.css';
import { Link } from 'react-router-dom';

const Aboutcontent = () => {
    return (
        // <>
        //     <div className='skills'>
        //         <h1>Skills</h1>
        //         <p>HTML, CSS, Javascript, ReactJs</p>
        //     </div>
            <div className='about'>
                <div className='left'>
                    <h1>Who Am I?</h1>
                    <p>I completed my training of react front-end developer from a bootcamp. I am a fresher and self learner and I create so many responsive websites.</p>
                    <Link to="/contact">
                        <button className='btn'>Contact</button>
                    </Link>
                </div>

                <div className='right'>
                    <div className='img-container'>
                        <div className='img-stack top'>
                            <img src="https://i.pinimg.com/236x/bd/c1/f3/bdc1f3ce76a72cd873c98a6555f87f56.jpg"
                                className='img'
                                alt="true" />
                        </div>

                        <div className='img-stack bottom'>
                            <img src="https://i.pinimg.com/236x/da/2c/ab/da2cab7ff4f18da212740f90cadca0c3.jpg"
                                className='img'
                                alt="true" />
                        </div>
                    </div>
                </div>
            </div>

        // </>
    )
}

export default Aboutcontent