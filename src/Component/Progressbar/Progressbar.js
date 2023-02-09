import React from 'react'
import './progress.css'
function Progressbar() {
    return (
        <div>

            <div className='percentages-90'>
                90%
            </div>
            <div className="containers">
                <div className="skills html">90%</div>
            </div>

            <div className='percentages-80'>
                80%
            </div>
            <div className="containers">
                <div class="skills css">80%</div>
            </div>

            <div className='percentages-65'>
                65%
            </div>
            <div className="containers">
                <div className="skills js">65%</div>
            </div>

            <div className='percentages-60'>
                60%
            </div>
            <div className="containers">
                <div className="skills php">60%</div>
            </div>


        </div>
    )
}

export default Progressbar