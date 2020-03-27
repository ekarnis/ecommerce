import { useQuery } from '@apollo/react-hooks'
import BOARDS_QUERY from '../constants/graphql/boards.query'

import Layout from '../components/Layout'
import InStockBox from '../components/InStockBox'

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
      Hey welcome to boards
    </Layout>
  )
}

export default Index
