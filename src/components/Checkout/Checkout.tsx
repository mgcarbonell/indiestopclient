import React from "react"
import PaymentForm from "../Forms/PaymentForm"
import "./checkout-style.css"

const Checkout: React.FC = () => {
  return (
    <div className="payment-container">
      <PaymentForm />
    </div>
  )
}

export default Checkout
