import Input from './Input'
import Select from './Select'

const Sizes = props => {
  return (
    <div className="flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-lg">
      <Input
        label={'Width'}
        onChange={props.setWidthInCm}
        type={'number'}
      />
      <Input
        label={'Length'}
        onChange={props.setLengthInCm}
        type={'number'}
      />
      <Input
        label={'Thickness'}
        onChange={props.setThicknessInCm}
        type={'number'}
      />
      <Select
        label={'Unit'}
        onChange={props.setUnit}
        options={['Centimeters', 'Inches']}
      />
    </div>
  )
}

export default Sizes
