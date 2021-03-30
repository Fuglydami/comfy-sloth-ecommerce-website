import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { motion } from 'framer-motion'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <motion.div
        transition={{ delay: 1, type: 'spring', stiffness: 50, duration: 2 }}
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        className="section-center featured"
      >
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </motion.div>
      <motion.div
        transition={{ delay: 1.5, type: 'spring', stiffness: 50, duration: 2 }}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
      >
        <Link to="/products" className="btn">
          all products
        </Link>
      </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
