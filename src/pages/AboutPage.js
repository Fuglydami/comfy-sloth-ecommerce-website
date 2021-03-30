import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
import { motion } from 'framer-motion'

const heroVariants = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: {
    opacity: 0,
    y: -20,
  },
}
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-page">
        <motion.img
          variants={heroVariants}
          animate="hidden"
          initial="visible"
          transition={{ type: 'tween', duration: 1.5 }}
          src={aboutImg}
          alt="nice desk"
        />
        <motion.article
          variants={heroVariants}
          animate="hidden"
          initial="visible"
          transition={{ type: 'tween', duration: 1 }}
        >
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Comfy Sloth is an online furniture/home decor retailer. We began as
            a regular Brick and Mortar furniture store located in South Florida
            offering our customers brand name furniture at offordable prices.
            Our retail locations are proudly serving residents of South Florida
            and The Bahamas. <br />
            Comfy Sloth is aimed to provide you with the latest in home
            furnishings, home decor and accessories at a price you can afford We
            always carry products that will be the focus of your home's decor
            with superior selection, value and quality
          </p>
        </motion.article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
