import React from 'react'
import './portfolio.css'
import Portfolioes from './Portfolioes'

const Portfolio = () => {
  return (
    <section className="work section" id='portfolio'>
    <h3 className="section__title">Portfolio</h3>
<span className="section__subtitle">Most recent work</span>
<Portfolioes />
</section>
  )
}

export default Portfolio