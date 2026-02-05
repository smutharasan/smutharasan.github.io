import React from 'react'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

import { useClampText } from 'use-clamp-text'

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

  const overviewText = `
I build full-stack, cloud-native applications that modernize enterprise systems and support real operational workflows. I’m especially interested in translating complex business and project management processes into scalable, intuitive software that performs reliably in regulated environments.

Currently, I work at Ontario Power Generation, where I’ve designed, built, and deployed multiple full-stack internal applications to replace legacy reporting pipelines and license-dependent tools. These systems leverage modern APIs, containerized deployments, and secure authentication to reduce processing time, improve usability, and support director-level decision-making across project teams.

Across my work, I’ve delivered applications in enterprise, e-commerce, and project management domains, with a focus on clean system architecture, performance optimization, and seamless integration between frontend interfaces and backend services. I’m comfortable working end-to-end—from infrastructure and APIs to user experience—while prioritizing maintainability and scale.

This portfolio highlights selected projects that reflect my approach to building practical, production-ready software. Each project demonstrates how thoughtful engineering can simplify complexity, streamline workflows, and create measurable impact.
  `

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
          {overviewText}
        </motion.p>
      ) : (
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='line-clamp-3 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {overviewText}
        </motion.p>
      )}
      <input
        type='checkbox'
        onClick={toggleExpanded}
        className="appearance-none expand-abt-btn before:content-['Expand'] checked:before:content-['Collapse'] bg-tertiary my-7 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl outline outline-stone-200 cursor-pointer"
      />
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}


export default SectionWrapper(About, 'about')
