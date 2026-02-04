import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'

describe('HomePage', () => {
  test('renders without crashing and shows welcome message', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: /welcome to our store/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/great products, great prices/i)
    ).toBeInTheDocument()
  })
})
