import PropTypes from 'prop-types'

const Toast = props => {
  const getToastColor = toastType => {
    if (toastType === 'SUCCESS') return 'green'
    if (toastType === 'ERROR') return 'red'
    if (toastType === 'INFORMATIONAL') return 'blue'
    return 'purple'
  }

  return (
    <div className={
      `alert-toast fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm ${props.isVisible ? 'visible' : 'invisible'}`
    }>
      <input type='checkbox' className='hidden' id='footertoast' />
      <label className={'close cursor-pointer flex items-start justify-between w-full p-2 bg-' + getToastColor(props.toastType) + '-500 h-24 rounded shadow-lg text-white'} title='close'>
        {props.toastMessage}

        <svg className='fill-current text-white' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
          <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
        </svg>
      </label>
    </div>
  )
}

Toast.propTypes = {
  toastMessage: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toastType: PropTypes.string.isRequired
}

export default Toast
