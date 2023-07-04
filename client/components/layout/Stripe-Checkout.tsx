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

  if (cartItems.length === 0) {
    return <p>Your shopping cart is empty.</p>
  }

  return (
    <div>
      <button
        onClick={handleCheckout}
        className="bg-black text-white py-2 px-4 rounded-full"
      >
        Checkout
      </button>
    </div>
  )
}
