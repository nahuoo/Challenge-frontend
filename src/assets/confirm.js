import * as React from 'react'
import { colors } from '../styles/colors'

const Confirm = (props) => {
  return (
    <svg width={24} height={24} fill={colors.mainBlue} viewBox='0 0 24 24' {...props}>
      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
    </svg>
  )
}

export default Confirm
