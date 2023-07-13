import React from 'react'
import SUCCESS from '../../assets/Success.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href= {SUCCESS} download className='btn'>Motivation Quotes</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
