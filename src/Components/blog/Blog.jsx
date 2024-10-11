import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Certifications</h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="#"><span className="blog__category">Reviews</span></a> */}
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Frontend Developer</h3>
            <p className="mb-2">
              Bangladesh Association of Software and Information Services
              (BASIS)
            </p>
            <div className="flex justify-end">
              <a href={"https://drive.google.com/file/d/1q-ZC5Tvfg9TJ-YXeURFIBZ6O0l24FjbZ/view?usp=drive_link"} target="_blank" className="btn">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="#"><span className="blog__category">Reviews</span></a> */}
            <a href="#">
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Web Development Intern</h3>
            <p className="mb-9">Carriastic</p>
            <div className="flex justify-end">
              <a href={"https://drive.google.com/file/d/1XfbXsdiLvKla_HIGcBVo-feZnghKiYT7/view?usp=sharing"} target="_blank" className="btn">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="#"><span className="blog__category">Reviews</span></a> */}
            <a href="#">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Professional English Communication</h3>
            <p className="mb-2"> Bangladesh Association of Software and Information Services
            (BASIS)</p>
            <div className="flex justify-end">
              <a href={"https://drive.google.com/file/d/1mMzLx7P9Y4ZByQLMeWkZpDknCKCPGjDb/view?usp=sharing"} target="_blank" className="btn">
                View
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;


// import React from 'react';
// import './blog.css';
// import Image1 from '../../assets/blog-1.svg';
// import Image2 from '../../assets/blog-2.svg';
// import Image3 from '../../assets/blog-3.svg';


// const Blog = () => {
//   return (
//     <section className="blog container section" id="blog"> 
//     <h2 className="section__title">Latest Posts</h2>
//       <div className="blog__container grid">
//         <div className="blog__card">
//           <div className="blog__thumb">
//              <a href="#"><span className="blog__category">Reviews</span></a>
//             <a href="#"><img src={Image1} alt=""
//               className="blog__img" /></a>
//           </div>
//           <div className="blog__details">
//             <h3 className="blog__title">5 Best App Developement Tool For Your Project</h3>
//             <div className="blog__meta">
//               <span>09 February,2023</span>
//               <span className="blog__dot">.</span>
//               <span>Bolby</span>
//             </div>
//             </div>
//       </div>

//       <div className="blog__card">
//           <div className="blog__thumb">
//              <a href="#"><span className="blog__category">Tutorial</span></a>
//             <a href="#"><img src={Image2} alt=""
//               className="blog__img" /></a>
//           </div>
//           <div className="blog__details">
//             <h3 className="blog__title">Common Misconception About Payment</h3>
//             <div className="blog__meta">
//               <span> 30 March,2023</span>
//               <span className="blog__dot">.</span>
//               <span>Bolby</span>
//             </div>
//             </div>
//       </div>

//       <div className="blog__card">
//           <div className="blog__thumb"> 
//           <a href="#"><span className="blog__category">Business</span></a>
//             <a href="#"><img src={Image3} alt=""
//               className="blog__img" /></a>
//           </div>
//           <div className="blog__details">
//             <h3 className="blog__title">3 Things To Know About Startup Business</h3>
//             <div className="blog__meta">
//               <span>01 May,2023</span>
//               <span className="blog__dot">.</span>
//               <span>Bolby</span>
//             </div>
//             </div>
//       </div>

//       </div>
//     </section>
//   )
// }

//         export default Blog