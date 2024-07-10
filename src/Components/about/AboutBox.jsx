import React from 'react';
import Image1 from '../../assets/html-5-logotype.png';
import Image2 from '../../assets/css-3.png';
import Image3 from '../../assets/bootstrap.png';
import Image4 from '../../assets/java-script-logo.png';
import Image5 from '../../assets/atom.png';
import Image6 from '../../assets/node-js.png';
import Image7 from '../../assets/example.png';
import Image8 from '../../assets/database .png';
import Image9 from '../../assets/Redux.png';
import Image10 from '../../assets/NextJS.png';
import Image11 from '../../assets/Firebase.png';
import Image12 from '../../assets/Typescript.png';
import Image13 from '../../assets/Tailwind.png';
import Image14 from '../../assets/Mongoose.png';


const AboutBox = () => {
    return (
        <>
        <section className='about__section'>
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
            <div className="about__box">
            <img src={Image9} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Redux</h3>
                    
                </div>
            </div>
            <div className="about__box">
            <img src={Image10} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Next JS</h3>
                    
                </div>
            </div>
            <div className="about__box">
            <img src={Image11} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Firebase</h3>
                    
                </div>
            </div>
            <div className="about__box">
            <img src={Image12} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Typescript</h3>
                    
                </div>
            </div>
            <div className="about__box">
            <img src={Image13} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">TailwindCss</h3>
                    
                </div>
            </div>
            <div className="about__box">
            <img src={Image14} alt="" className='icon-img'/>
                <div>
                    <h3 className="about__title">Mongoose</h3>
                    
                </div>
            </div>

        </div>
        </section>
        </>
    )
}

export default AboutBox