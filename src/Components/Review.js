import React from 'react'

function Review() {
    return (
        <div id='review' className='bbblack'>

            <h1>Hear it from our Customers</h1>
            <div className='d-flex justify-content-centered'>
                <div className='m-4'>
                    <video src="/video/pass-countdown.ogg" width="300" height="150" controls>
                        <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
                    </video>
                </div>
                <div className='m-4'>
                    <video src="/video/pass-countdown.ogg" width="300" height="150" controls>
                        <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
                    </video>
                </div>
                <div className='m-4'>
                    <video src="/video/pass-countdown.ogg" width="300" height="150" controls>
                        <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
                    </video>
                </div>
            </div>
            < div className='reviewbox m-4'>
                "Danjr Wedding Biriyani exceeded expectations! The biryanis were a delightful blend of authenticity and flavor. The online ordering process was seamless, and the delivery was prompt. A truly satisfying experience!"
                <div className=""> - Gokul</div>
            </div>

            < div className='reviewbox'>
                "Danjr Wedding Biriyani exceeded expectations! The biryanis were a delightful blend of authenticity and flavor. The online ordering process was seamless, and the delivery was prompt. A truly satisfying experience!"
                <div className=""> - Gokul</div>
            </div>
        </div>
    )
}

export default Review
