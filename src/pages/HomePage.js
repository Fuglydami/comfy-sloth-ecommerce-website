import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}
const HomePage = () => {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </motion.main>
  )
}

export default HomePage
