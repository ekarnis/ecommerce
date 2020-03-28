import { useQuery } from '@apollo/react-hooks'
import WOODS_QUERY from '../constants/graphql/woods.query'

import OptionBox from './OptionBox'

const Woods = props => {
  const { data, loading, error } = useQuery(WOODS_QUERY)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <div className="flex items-center justify-start flex-wrap">
      {data.woods.map(wood =>
        <OptionBox
          key={wood.id}
          setHook={props.setWood}
          {...wood}
        >
        </OptionBox>
      )}
    </div>
  )
}

export default Woods
