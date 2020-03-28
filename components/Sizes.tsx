
const Sizes = props => {
  return (
    <div className="flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-lg">
      <div className="w-64 px-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Width
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" onChange={e=>props.setWidthInCm(e.target.value)}/>
      </div>

      <div className="w-64 px-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Length
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" onChange={e=>props.setLengthInCm(e.target.value)}/>
      </div>
      <div className="w-64 px-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Thickness
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" onChange={e=>props.setThicknessInCm(e.target.value)}/>
      </div>
      <div className="w-64 px-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Unit
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={e=>props.setUnit(e.target.value)}>
            <option>Centimeters</option>
            <option>Inches</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sizes
