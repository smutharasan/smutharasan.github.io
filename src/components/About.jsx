import React from 'react'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

import { useClampText } from 'use-clamp-text'

const longText = ` I am passionate about the art of storytelling, and I firmly believe that
        code serves as an influential medium to convey captivating narratives
        about the transformative journey of corporate applications and the
        overall well-being of societies. As an AWS Certified Cloud Solutions
        Architect, I have honed my skills in developing innovative web
        applications that not only solve complex problems but also engage users
        with captivating experiences.
        
        During my career, I have had the opportunity to work on a
        diverse range of projects. One particularly rewarding experience was
        being part of a knowledge management project. This endeavor allowed me
        to delve into the intricacies of various business processes and goals,
        ultimately leading me to develop a comprehensive business glossary Power
        BI solution with 300+ business terms consolidated with the Canada Style
        Guide. Through this project, I gained a deep understanding of how
        technology can empower organizations by facilitating effective
        communication and information management.
        
        Furthermore, I have led multiple web application projects
        spanning different domains. From e-commerce platforms to event
        management systems and social media applications, I have demonstrated my
        versatility in delivering successful solutions across various
        industries. With each project, I strive to create intuitive interfaces,
        optimize performance, and ensure seamless integration with backend
        systems.
        
        I invite you to scroll down and explore my portfolio to learn
        more about my work and the stories I've told through code. From
        captivating user interfaces to scalable cloud architectures, each
        project showcases my commitment to excellence and my passion for
        creating meaningful digital experiences. Thank you for visiting, and I
        look forward to sharing more of my journey with you.`

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          options={{ speed: 450, max: 45, scale: 1 }}
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((state) => !state)

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview,</h2>
      </motion.div>
      {expanded ? (
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='line-clamp-none mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {' '}
          I am passionate about the art of storytelling, and I firmly believe
          that code serves as an influential medium to convey captivating
          narratives about the transformative journey of corporate applications
          and the overall well-being of societies. As an AWS Certified Cloud
          Solutions Architect, I have honed my skills in developing innovative
          web applications that not only solve complex problems but also engage
          users with captivating experiences.<br></br>
          <br></br> During my career, I have had the opportunity to work on a
          diverse range of projects. One particularly rewarding experience was
          being part of a knowledge management project. This endeavor allowed me
          to delve into the intricacies of various business processes and goals,
          ultimately leading me to develop a comprehensive business glossary
          Power BI solution with 300+ business terms consolidated with the
          Canada Style Guide. Through this project, I gained a deep
          understanding of how technology can empower organizations by
          facilitating effective communication and information management.
          <br></br>
          <br></br> Furthermore, I have led multiple web application projects
          spanning different domains. From e-commerce platforms to event
          management systems and social media applications, I have demonstrated
          my versatility in delivering successful solutions across various
          industries. With each project, I strive to create intuitive
          interfaces, optimize performance, and ensure seamless integration with
          backend systems.<br></br>
          <br></br> I invite you to scroll down and explore my portfolio to
          learn more about my work and the stories I've told through code. From
          captivating user interfaces to scalable cloud architectures, each
          project showcases my commitment to excellence and my passion for
          creating meaningful digital experiences. Thank you for visiting, and I
          look forward to sharing more of my journey with you.
        </motion.p>
      ) : (
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='line-clamp-3 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {' '}
          I am passionate about the art of storytelling, and I firmly believe
          that code serves as an influential medium to convey captivating
          narratives about the transformative journey of corporate applications
          and the overall well-being of societies. As an AWS Certified Cloud
          Solutions Architect, I have honed my skills in developing innovative
          web applications that not only solve complex problems but also engage
          users with captivating experiences.<br></br>
          <br></br> During my career, I have had the opportunity to work on a
          diverse range of projects. One particularly rewarding experience was
          being part of a knowledge management project. This endeavor allowed me
          to delve into the intricacies of various business processes and goals,
          ultimately leading me to develop a comprehensive business glossary
          Power BI solution with 300+ business terms consolidated with the
          Canada Style Guide. Through this project, I gained a deep
          understanding of how technology can empower organizations by
          facilitating effective communication and information management.
          <br></br>
          <br></br> Furthermore, I have led multiple web application projects
          spanning different domains. From e-commerce platforms to event
          management systems and social media applications, I have demonstrated
          my versatility in delivering successful solutions across various
          industries. With each project, I strive to create intuitive
          interfaces, optimize performance, and ensure seamless integration with
          backend systems.<br></br>
          <br></br> I invite you to scroll down and explore my portfolio to
          learn more about my work and the stories I've told through code. From
          captivating user interfaces to scalable cloud architectures, each
          project showcases my commitment to excellence and my passion for
          creating meaningful digital experiences. Thank you for visiting, and I
          look forward to sharing more of my journey with you.
        </motion.p>
      )}
      <input
        type='checkbox'
        onClick={toggleExpanded}
        className="appearance-none expand-abt-btn before:content-['Expand'] checked:before:content-['Collapse']  bg-tertiary my-7 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl outline outline-stone-200 cursor-pointer"
      ></input>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          ></ServiceCard>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')
