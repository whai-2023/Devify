import { useShoppingCart } from '../../context/ShoppingCartContext'

export default function StripeCheckout() {
  const { cartItems } = useShoppingCart()

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/v1/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }),
      })

      const data = await response.json()

      const { url } = data

      window.location.href = url
    } catch (error) {
      console.error('An error occurred during checkout:', error)
    }
  }

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}
