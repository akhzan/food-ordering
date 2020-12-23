import React, { ReactElement, ReactNode } from 'react'
import { useResponsiveState } from './state'

interface Props {
  normalView: ReactNode
  mobileView: ReactNode
}

const Responsive = ({ normalView, mobileView }: Props): ReactElement => {
  const { isMobile } = useResponsiveState()
  return <div>{isMobile ? mobileView : normalView}</div>
}

export const isMobileState = useResponsiveState

export default Responsive
