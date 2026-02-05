import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks, aws, opg,
  ssc,
  tdsb,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'notes',
    title: 'Notes',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
   {
    title: 'Fullstack Software Developer',
    company_name: 'Ontario Power Generation (OPG)',
    icon: opg,
    iconBg: '#383E56',
    date: 'August 2025 - PRESENT',
    points: [
      'Modernized a legacy SSRS/RDL reporting pipeline by delivering a centralized Project Management web app that replaced multi‑minute SQL‑driven reports with optimized APIs, reducing report generation to seconds and automating L1/L2 PDF creation for director‑level reviews.',
      'Replaced a license‑dependent PowerApps solution with a scalable full‑stack Workbench application (C#, Angular, Kubernetes), eliminating per‑user licensing costs and improving performance and scalability for 200+ users through AD‑based authentication.',
      'Enhanced usability by developing custom TIBCO EBX UI forms and business rules, increasing user adoption and reducing data entry errors by approximately 30%.',
      'Streamlined project oversight through automated email alerts and workflow automation, cutting manual coordination effort for Project Managers and accelerating issue resolution timelines.'
    ]
  },
  {
    title: 'Solutions Architect Intern',
    company_name: 'Amazon Web Services (AWS)',
    icon: aws,
    iconBg: '#383E56',
    date: 'April 2025 - August 2025',
    points: [
      'Designing and supporting scalable, secure, and cost-optimized AWS architectures that align with customer technical and business objectives.',
      'Building interactive dashboards with Amazon QuickSight, integrating datasets from Amazon S3 and AWS Athena to provide near real-time analytics.',
      'Participating in technical deep dives and architecture reviews to identify performance and reliability improvements using services like EC2, RDS, Lambda, and CloudFront.',
      'Translating stakeholder feedback into clear technical requirements for product teams, contributing to customer-centric service enhancements.',
      'Conducting hands-on walkthroughs and labs to upskill customer engineering teams on IAM, serverless architecture, VPC networking, and analytics services.',
      'Producing reusable reference architectures, knowledge articles, and automation scripts to accelerate cloud adoption and onboarding processes.',
      'Shadowing customer discovery sessions and contributing to cloud solutioning by identifying root technical challenges through strategic questioning.'
    ]
  },
  {
    title: 'Power Apps & Power BI Developer',
    company_name: 'Shared Services Canada (SSC)',
    icon: ssc,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Sept. 2024',
    points: [
      'Enhancing transparency and accountability by implementing a centralized tracking system using PowerApps and Power Automate, reducing unresolved issues by 25%.',
      'Enabling intake and project coordinator teams to track BR progress electronically through an automated checklist and exception logic, reducing manual effort and communication delays.',
      'Driving a 30% increase in system adoption by creating over 10 user guides, infographics, and organizational visuals to clarify system benefits and support stakeholder integration.',
      'Resolving WCAG compliance issues by fixing tab order and enhancing data visibility for screen readers, improving platform inclusivity for assistive technology users.',
      'Standardizing the intake process using a Power Automate flow to sort and categorize over 250 monthly business request emails, reducing workload and improving assignment accuracy.',
      'Analyzing historical BR data using Excel functions like VLOOKUP to identify milestone trends and provide actionable insights for improved planning and process optimization.',
      'Designing and integrating over 10 UML class diagrams into the business architecture document to simplify system understanding and facilitate collaboration across teams.',
      'Developing a bilingual, searchable Power BI glossary of over 200 terms to streamline onboarding, enhance team alignment, and reduce dependency on live instruction.',
      'Producing 20 bilingual software training videos to onboard executives and Linux/Unix teams, increasing efficiency and reducing miscommunication through consistent resources.'
    ],
  },
  {
    title: 'C# Developer & DotNetNuke CMS Assistant',
    company_name: 'Toronto District School Board',
    icon: tdsb,
    iconBg: '#383E56',
    date: 'May 2021 - Dec 2021',
    points: [
      'Enhancing AODA compliance of the public-facing website by using tools like SiteImprove and custom HTML scripts to scan and improve accessibility across the board’s digital presence.',
      'Improving user navigation on the sports event web application by introducing filters for event type and gender, enhancing the overall user experience.',
      'Remediating and quality-testing over 100 web pages, 50 school websites, and 20 modules under strict timelines to ensure WCAG-compliant accessibility.',
      'Collaborating with over 20 school principals and marketing officers to design and update school and public webpages, improving design consistency and content clarity.',
      'Deploying and testing the staff login page used board-wide under a tight deadline, delivering essential access functionality reliably and on time.'
    ],
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, projects }
