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
        <iframe src={"https://drive.google.com/file/d/1-mEX1a0HTSMHIgqJiPVKmIQF8GUIk_GO/preview"} width={640} height={480} allow="autoplay"></iframe>        <div className='Example__container__document'>
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
        <iframe src={"https://drive.google.com/file/d/119pzYf_2cPDhEoSiToj39_sKWRzA_Vht/preview"} width={640} height={480} allow="autoplay"></iframe>
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
