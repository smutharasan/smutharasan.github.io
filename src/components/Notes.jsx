import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import './react-pdf.css'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString()

import { styles } from '../styles'
import { textVariant } from '../utils/motion'
const Notes = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  const options = {
    cMapUrl: 'cmaps/',
    standardFontDataUrl: 'standard_fonts/',
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Check out my </p>
        <h2 className={styles.sectionHeadText}>Cloud resources &#x2601; </h2>
      </motion.div>
      <div className='mt-10 flex flex-col'>
        <h3 className={styles.sectionSubText}>Certified Cloud Practioner</h3>
        <div className='Example__container__document'>
          <Document
            file='./src/assets/notes/ccp.pdf'
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
      <div className='mt-10 flex flex-col'>
        <h3 className={styles.sectionSubText}>
          Solutions Architect Associate,
        </h3>
        <div className='Example__container__document'>
          <Document
            file='./src/assets/notes/saa.pdf'
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Notes, '')
