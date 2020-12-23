import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history'
import { mockMatchMedia } from 'tests/match-media'
import Home from 'components/pages/home'

mockMatchMedia()

const renderHome = () => {
  const history = createMemoryHistory()
  const utils = render(
    <Router history={history}>
      <Home />
    </Router>,
  )
  return utils
}

describe('Home Page', () => {
  test('should render correctly', () => {
    const { getByText } = renderHome()
    const title = getByText('Home')
    expect(title).toBeInTheDocument()
  })
})
