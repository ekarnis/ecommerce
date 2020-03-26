import Link from 'next/link'

import { useQuery } from '@apollo/react-hooks'
import BOARDS_QUERY from '../constants/graphql/boards.query'

import Layout from '../components/Layout'
import ProductBox from '../components/ProductBox'

const Index = () => {
  const { data, loading, error } = useQuery(BOARDS_QUERY)
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <Layout>
      <div className="flex items-center justify-start flex-wrap">
        {data.boards.map(board =>
          <ProductBox key={board.id} {...board}></ProductBox>
        )}
      </div>
    </Layout>
  )
}

export default Index
