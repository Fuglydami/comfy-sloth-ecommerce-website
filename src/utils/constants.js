import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'It starts with our designers who imagine the most relevant designs of today and tomorrow. It extends to our manufacturers who obsess over materials and details. ',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: `We started in the fall of 2010 and introduced our first collection in 2012 at a trade show in Melbourne. Since then we've been making premium handmade furniture to order.`,
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'comfy sloth began because we were tired of disposable furniture. So we set out to design products of lasting quality for how people live today. Furniture should be made for the home, not the landfill.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
