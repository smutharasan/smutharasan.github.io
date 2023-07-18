import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Notes,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'

function App() {
  return (
    <BrowserRouter>
      <>Supriya Mutharasan Portfolio</>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About></About>
        <Experience></Experience>
        <Tech></Tech>
        <Works></Works>
        <Notes></Notes>
        <div className='relative z-0'>
          <Contact></Contact>
          <StarsCanvas></StarsCanvas>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
