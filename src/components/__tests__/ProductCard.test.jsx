import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 19.99,
  }

  test('renders product name and price', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={() => {}}
      />
    )

    expect(screen.getByText(/test product/i)).toBeInTheDocument()
    expect(screen.getByText('$19.99')).toBeInTheDocument()
  })

  test('renders Add to Cart button', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={() => {}}
      />
    )

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })

  test('calls onAddToCart when button is clicked', () => {
    const mockAddToCart = vi.fn()

    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={mockAddToCart}
      />
    )

    fireEvent.click(
      screen.getByRole('button', { name: /add to cart/i })
    )

    expect(mockAddToCart).toHaveBeenCalledTimes(1)
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct)
  })
})
