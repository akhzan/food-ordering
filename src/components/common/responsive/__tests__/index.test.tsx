import React from 'react'
import { act, render, fireEvent } from '@testing-library/react'
import { mockMatchMedia } from 'tests/match-media'
import Responsive from 'components/common/responsive'

mockMatchMedia()

const resizeWindow = (x: number, y: number) => {
  global.innerWidth = x
  global.innerHeight = y
  fireEvent(window, new Event('resize'))
}

const renderResponsive = () => {
  const utils = render(
    <Responsive
      normalView={<div>Normal</div>}
      mobileView={<div>Mobile</div>}
    />,
  )
  return utils
}

describe('Responsive', () => {
  test('should render correctly', () => {
    const { getByText } = renderResponsive()
    act(() => resizeWindow(500, 500))
    const mobile = getByText('Mobile')
    expect(mobile).toBeInTheDocument()
  })
})
