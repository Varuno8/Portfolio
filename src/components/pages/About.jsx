import React from 'react';
import aboutImage from '../../assets/MyImage.jpeg'; // Adjust path as needed

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 py-20 fade-in">
      <div className="container mx-auto px-4 lg:px-32 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-2/5 w-3/4 mb-10 lg:mb-0">
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-3/5 lg:pl-12 text-center lg:text-left">
          <h3 className="text-4xl font-extrabold mb-6">About Me</h3>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            I'm a graduated B.Tech student specializing in IoT in Electronics
            and Communication Engineering at NSUT, Delhi. I have experience in
            full-stack web development, data analysis, and automation. My
            projects showcase my passion for building scalable and innovative
            solutions.
          </p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            I’ve worked as an Software Developer, a Web Developer Intern at
            Business Web Solutions, and have successfully completed projects
            like QuickBites and Completed web developer internship, gaining
            hands-on experience in building and maintaining web applications. ∗
            Implemented front-end designs to enhance user experience and
            debugged code. ∗ Developed skills in HTML, CSS, JavaScript,
            TypeScript, Angular. ∗ Collaborated with senior developers to
            integrate APIs and optimize application performance..
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
