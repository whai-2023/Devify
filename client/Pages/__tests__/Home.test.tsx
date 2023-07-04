// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { renderRoute } from '../../test-utils'
import nock from 'nock'

vi.mock('@ionic/react', () => {
  return {
    IonIcon: () => {
      return <div>ionic icon</div>
    },
  }
})

type MockShoppingCartProviderProps = {
  children: React.ReactNode
}

vi.mock('../../context/ShoppingCartContext', () => {
  return {
    useShoppingCart: {
      openCart: () => null,
      closeCart: () => null,
      getItemQuantity: (id: number) => 0,
      increaseCartQuantity: (id: number) => null,
      decreaseCartQuantity: (id: number) => null,
      removeFormCart: (id: number) => null,
      cartQuantity: 0,
      cartItems: [],
    },
    ShoppingCartProvider: (props: MockShoppingCartProviderProps) => {
      return props.children
    },
  }
})

describe('<Home>', () => {
  it('should display both image-carousel and product-display', async () => {
    const scope1 = nock('http://localhost')
      .get('/api/v1/products')
      .reply(200, [
        { id: 1, name: 'phones', imageUrl: '/images/Iphone-14-Pro.jpeg' },
        { id: 2, name: 'laptops', imageUrl: '/images/Macbook-Pro-14-M1.jpeg' },
        { id: 3, name: 'tablets', imageUrl: '/images/Ipad-Pro.jpeg' },
        { id: 4, name: 'earphones', imageUrl: '/images/Airpod-Pro.jpeg' },
        { id: 5, name: 'animals', imageUrl: '/images/Cream.png' },
      ])

    const scope2 = nock('http://localhost')
      .get('/api/v1/products/all')
      .reply(200, [
        {
          id: 1,
          name: 'Iphone 14 Pro',
          price: 1999,
          description: `test`,
          imageUrl: '/images/Iphone-14-Pro.jpeg',
          category_id: 1,
        },
        {
          id: 2,
          name: 'Macbook Pro 14inch M1',
          price: 3999,
          description: `test`,
          imageUrl: '/images/Macbook-Pro-14-M1.jpeg',
          category_id: 2,
        },
        {
          id: 2,
          name: 'Macbook Pro 14inch M1',
          price: 3999,
          description: `test`,
          imageUrl: '/images/Macbook-Pro-14-M1.jpeg',
          category_id: 2,
        },
      ])

    renderRoute('/')
    screen.debug()

    await waitFor(() =>
      expect(
        screen.getByTestId('product-display-loading')
      ).not.toBeInTheDocument()
    )
  })
})
