import { useShoppingCart } from '../../context/ShoppingCartContext'
import { Offcanvas } from 'react-bootstrap'

type ShoppingCartProps = {
  isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart()
  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </>
  )
}
