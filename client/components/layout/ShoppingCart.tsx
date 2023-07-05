import { useShoppingCart } from '../../context/ShoppingCartContext'
import { Offcanvas, Stack } from 'react-bootstrap'
import { CartItem } from './CartItem'
import { formatCurrency } from '../../utilities/formatCurrency'
import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../../apis/products'
import StripeCheckout from './Stripe-Checkout'

type ShoppingCartProps = {
  isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const {
    data: storeItems,
    isError,
    isLoading,
  } = useQuery(['products'], () => getAllProducts())

  const { closeCart, cartItems } = useShoppingCart()

  if (isError) {
    return <div>Error occurred while getting products</div>
  }

  if (isLoading) {
    return <div>Products are loading...</div>
  }

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>Cart</Offcanvas.Title>
          {/* <button onClick={closeCart}>X</button> */}
          <img src="/assets/cross.svg" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{' '}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </div>
            <StripeCheckout />
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
