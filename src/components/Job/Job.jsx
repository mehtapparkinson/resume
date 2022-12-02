import React from 'react'
import './job.css'
import light from '../../img/light.png'

const Job = () => {
  return (
    <div>
        <div className="j">
            
            <div className="j-left">
                <div className="j-right-wrapper">
                    <h3>
                        💾 I have developed a passion for data analysis and have been working on my skills in Python and SQL.
                    </h3>
                
                    <h3>
                        👩🏽‍💻 Working as an Annotation Analyst sparked my interest in AI / ML and I am very eager to learn more.
                    </h3>
                    <br />
                    <h3>
                        ↗️ I would be delighted to be consired for Data Moderation Rotation Program at 🍏 to be able to learn and grow with the best in the industry for the next 4 months.
                    </h3>
                </div>
            </div>

            <div className="j-right">
                <div className="j-left-wrapper">
                    <img src={light} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Job