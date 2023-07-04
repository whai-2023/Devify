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

  const { removeFormCart } = useShoppingCart()

  if (isError) {
    return <div>Error occurred while getting products</div>
  }

  if (isLoading) {
    return <div>Products are loading...</div>
  }
  const item = storeItems.find((i) => i.id === id)

  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imageUrl}
        alt=""
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div>
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
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFormCart(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  )
}
