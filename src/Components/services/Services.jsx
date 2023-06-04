import React from 'react';
import './services.css';
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Web Design',
    description: 'I create beautiful and responsive designs that work on any device.',
    
  },
  {
    id: 2,
    image: Image2,
    title: 'Web Development',
    description: 'I build robust and scalable web applications using the latest technologies.',
    
  },
  {
    id: 3,
    image: Image3,
    title: 'UX/UI Design',
    description: 'I  design  professional and specializes  digital interfaces which are websites, mobile apps, and other digital products.',
    
  }

]

const Services = () => {

  return (
    <section className="services container section" id="services"> 
    <h2 className="section__title">Services</h2>

      <div className="services__container grid"> {data.map (({ id, image, title, description }) => {
        return (
          <div className="services__card" key={id}> <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3> <p className="services__description">{description}</p>
          </div>
        );
      })}
      </div>
    </section>
  );
}



export default Services;