import { render } from '@testing-library/react'
import Example from './example'
import { expect } from '@jest/globals'

it('renders Example unchanged', () => {
  const { container } = render(<Example />)

  expect(container).toMatchSnapshot()
})
