

import React from 'react'
import'../app/styles/about.css'

const About = () => {
  return (
    <div id="aboutme" className="about-section">
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center about-container">
         
          {/* About Text Section */}
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center about-text">
            <h1 className="about-heading">
              About me
            </h1>
            <p className="mb-8 leading-relaxed about-description">
              I am a skilled web developer with expertise in Next.js, known for my strong grasp of modern web technologies and dedication to creating fast, user-friendly websites and applications. Leveraging Next.js’s powerful features, I build high-performance web solutions optimized for both users and search engines, ensuring seamless experiences and robust functionality.
            </p>
            <p className="mb-8 leading-relaxed about-description">
              With a commitment to staying current with the latest advancements in the Next.js ecosystem, I continually refine my skills and adopt best practices to improve my craft. I enjoy working through challenges in server-side rendering, dynamic routing, and API integration, creating web applications that are both technically sound and visually appealing.
            </p>
            {/* Download CV Button */}
            <div className="download-container">
              <a href="\my cv.JPG" className="download-link">
                <button className="download-button">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
