import Link from 'next/link'

import { useQuery } from '@apollo/react-hooks'
import ALBUMS_QUERY from '../constants/graphql/albums.query'

import Layout from '../components/Layout'
import ProductBox from '../components/ProductBox'

const products = [
  {
    id: 0,
    wood: 'Oak',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Dark',
    imageSrc: '/board.jpg'
  },
  {
    id: 1,
    wood: 'Willow',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Light',
    imageSrc: '/board.jpg'
  },
  {
    id: 2,
    wood: 'Willow',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Light',
    imageSrc: '/board.jpg'
  },
  {
    id: 3,
    wood: 'Willow',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Light',
    imageSrc: '/board.jpg'
  },
  {
    id: 4,
    wood: 'Willow',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Light',
    imageSrc: '/board.jpg'
  },
  {
    id: 5,
    wood: 'Willow',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Light',
    imageSrc: '/board.jpg'
  },
  {
    id: 6,
    wood: 'Willow',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Light',
    imageSrc: '/board.jpg'
  },
  {
    id: 7,
    wood: 'Willow',
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: 'Light',
    imageSrc: '/board.jpg'
  }
]

const productBoxes = products.map(product => (
  <ProductBox key={product.id} {...product}></ProductBox>
))

const Index = () => {
  const { data, loading, error } = useQuery(ALBUMS_QUERY)
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <Layout>
      <div className="flex items-center justify-start flex-wrap">
        {productBoxes}
        <h1>Test: &nbsp;</h1>
        {data.albums.map(album => (
          <div key={album.id}>
            <Link href="/p/[id]" as={`/p/${album.artist.id}`}>
              <a>{album.artist.id}&nbsp;</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Index
