import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { vi } from 'vitest'

// Mock child components so we only test App logic
vi.mock('../components/Header', () => ({
  default: ({ cartCount }) => <div>Cart Count: {cartCount}</div>,
}))

vi.mock('../pages/HomePage', () => ({
  default: () => <div>Home Page</div>,
}))

vi.mock('../pages/ProductsPage', () => ({
  default: () => <div>Products Page</div>,
}))

vi.mock('../pages/CartPage', () => ({
  default: () => <div>Cart Page</div>,
}))

describe('App cart state and localStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('loads cart data from localStorage on startup', () => {
    const storedCart = [
      { id: 1, name: 'Wireless Headphones', price: 99.99 },
    ]

    localStorage.setItem('cart', JSON.stringify(storedCart))

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(getByText(/cart count: 1/i)).toBeInTheDocument()
  })

  test('saves cart changes to localStorage', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(setItemSpy).toHaveBeenCalledWith('cart', JSON.stringify([]))
  })
})
