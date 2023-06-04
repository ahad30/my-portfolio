import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">198</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">427</h3>
                    <span className="about__subtitle">Satiesfied Clients</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">50</h3>
                    <span className="about__subtitle">Nomines Winner</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">70</h3>
                    <span className="about__subtitle">Coffee Cup</span>
                </div>
            </div>



        </div>
    )
}

export default AboutBox