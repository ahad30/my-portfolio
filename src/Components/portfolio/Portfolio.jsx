import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState('Everything'); // Track the active category

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updatedItems);
    setActiveFilter(categoryItem); // Update the active filter
  };

  return (
    <section className="container work section" id="portfolio">
      <h2 className="section__title">Recent works</h2>

      <div className="work__filters">
        {/* Apply a conditional active color based on the active filter */}
        <span
          className={`work__item ${activeFilter === 'Everything' ? 'text-[#fe4c61] font-bold' : ''}`}
          onClick={() => {
            setItems(Menu);
            setActiveFilter('Everything');
          }}
        >
          Everything
        </span>
        <span
          className={`work__item ${activeFilter === 'Development' ? 'text-[#fe4c61] font-bold' : ''}`}
          onClick={() => filterItem('Development')}
        >
          Development
        </span>
        <span
          className={`work__item ${activeFilter === 'Design' ? 'text-[#fe4c61]  font-bold' : ''}`}
          onClick={() => filterItem('Design')}
        >
          Design
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, description } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img h-[490px] w-full object-fill" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className={`work__description ${id === 1 && 'text-justify text-sm'}`}>
                {description}
              </p>

              <a href={link} target="_blank" rel="noopener noreferrer">
                <button disabled={id === 4} className="work__button disabled:cursor-not-allowed">
                  <i className="icon-link work__button-icon"></i>
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
