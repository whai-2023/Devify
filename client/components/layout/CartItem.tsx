import { useQuery } from '@tanstack/react-query'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { getAllProducts } from '../../apis/products'
import { Stack, Button } from 'react-bootstrap'
import { formatCurrency } from '../../utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const {
    data: storeItems,
    isError,
    isLoading,
  } = useQuery(['products'], () => getAllProducts())

  const { removeFromCart } = useShoppingCart()

  if (isError) {
    return <div>Error occurred while getting products</div>
  }

  if (isLoading) {
    return <div>Products are loading...</div>
  }
  const item = storeItems.find((i) => i.id === id)

  if (item == null) return null

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center w-full"
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
      />
      <div className="me-auto">
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
