import React from 'react';
import Image1 from '../../assets/html-5-logotype.png';
import Image2 from '../../assets/css-3.png';
import Image3 from '../../assets/bootstrap.png';
import Image4 from '../../assets/java-script-logo.png';
import Image5 from '../../assets/atom.png';
import Image6 from '../../assets/node-js.png';
import Image7 from '../../assets/example.png';
import Image8 from '../../assets/database .png';


const AboutBox = () => {
    return (
        <>
        <section>
        <h2 className="section__title">Core Skills</h2>
        <div className="about__boxes grid">
            <div className="about__box">
                <img src={Image1} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">HTML5</h3>
                
                </div>
            </div>

            <div className="about__box">
            <img src={Image2} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">CSS3</h3>
                    
                </div>
            </div>

            <div className="about__box">
            <img src={Image3} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Bootstrap5</h3>
                    
                </div>
            </div>

            <div className="about__box">
            <img src={Image4} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Javascript</h3>
                    
                </div>
            </div>
            <div className="about__box">
            <img src={Image5} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">React JS</h3>
                   
                </div>
            </div>
            <div className="about__box">
            <img src={Image6} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Node JS</h3>
                   
                </div>
            </div>
            <div className="about__box">
            <img src={Image7} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Express JS</h3>
                    
                </div>
            </div>
            <div className="about__box">
            <img src={Image8} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">MongoDb</h3>
                    
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default AboutBox