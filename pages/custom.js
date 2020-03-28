import { useState } from 'react'

import Layout from '../components/Layout'
import Woods from '../components/Woods'
import Stains from '../components/Stains'
import Sizes from '../components/Sizes'

const Index = () => {
  const [stage, setStage] = useState(0)
  const [wood, setWood] = useState({})
  const [stain, setStain] = useState({})
  const [widthInCm, setWidthInCm] = useState(0)
  const [lengthInCm, setLengthInCm] = useState(0)
  const [thicknessInCm, setThicknessInCm] = useState(0)
  const [unit, setUnit] = useState('Centimeters')

  return (
    <Layout>

      <h1 className="text-6xl">Build your Board</h1>
      <h2 className="text-3xl">
        {
          stage === 0 ? 'Choose a Wood'
            : stage === 1 ? 'Choose a Stain'
              : stage === 2 ? 'Choose a Size'
                : 'Error'
        }
      </h2>
      <h3 className="text-xl mb-16">
        {wood.name !== undefined
          ? wood.name
          : null}
        {stain.name !== undefined
          ? ', ' + stain.name
          : null}
        {widthInCm !== 0
          ? ', ' + widthInCm
          : null}
        {lengthInCm !== 0
          ? ' x ' + lengthInCm
          : null}
        {thicknessInCm !== 0
          ? ' x ' + thicknessInCm
          : null}
        {widthInCm !== 0 || lengthInCm !== 0 || thicknessInCm !== 0
          ? ' ' + unit
          : null}
      </h3>

      {stage > 0
        ? <button
          onClick={() => setStage(stage - 1)}
          className="fixed left-0 rounded-full h-16 w-16 ml-2 flex items-center justify-center inline-block text-md px-4 py-2 leading-none border text-indigo-500 border-indigo-500 bg-white hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4"
          style={{ top: '50%' }}
        >
          <span className="text-2xl">{'<'}</span>
        </button>
        : null
      }

      <div className="flex items-center ">
        <div className="flex items-center justify-start flex-wrap">
          {stage === 0
            ? <Woods setWood={setWood}/>
            : stage === 1
              ? <Stains setStain={setStain}/>
              : stage === 2
                ? <Sizes
                  setWidthInCm={setWidthInCm}
                  setLengthInCm={setLengthInCm}
                  setThicknessInCm={setThicknessInCm}
                  setUnit={setUnit}
                />
                : null
          }

        </div>
      </div>

      {wood.name !== undefined && stage < 1 || stain.name !== undefined && stage < 2
        ? <button
          onClick={() => setStage(stage + 1)}
          className="fixed right-0 rounded-full h-16 w-16 mr-2 flex items-center justify-center inline-block text-md px-4 py-2 leading-none border text-indigo-500 border-indigo-500 bg-white hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4"
          style={{ top: '50%' }}
        >
          <span className="text-2xl">{'>'}</span>
        </button>
        : null
      }
      {wood.name !== undefined && stain.name !== undefined && widthInCm !== 0 &&
          lengthInCm !== 0 && thicknessInCm !== 0 && stage === 2
        ? <button
          className="fixed right-0 rounded mr-4 flex items-center justify-center inline-block text-md p-4 leading-none border text-indigo-500 border-indigo-500 bg-white hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4"
          style={{ top: '50%' }}
        >
          <span className="text-2xl">Add to Cart</span>
        </button>
        : null}
    </Layout>
  )
}

export default Index
