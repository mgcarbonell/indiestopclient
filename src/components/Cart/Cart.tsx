import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import CartItem from "./CartItem"
import { Button } from "@mui/material"
// import ""
const Cart = () => {
  const onPage = [] as any[]
  const { items } = useContext(ShoppingCartContext)
  const clean = items?.sort((a, b) => a.id - b.id)
  let cartTotal = 0
  clean?.forEach((item) => {
    cartTotal += item.price
  })
  return (
    <div className="cart-container">
      {clean?.map((item: any, index: number) => {
        if (onPage.indexOf(item.id) === -1) {
          onPage.push(item.id)
          return <CartItem key={index} item={item} />
        } else {
          return null
        }
      })}
      <h3 className="cart-total">Total: ${cartTotal / 100}</h3>
      <Button variant="outlined">
        <Link to={"/checkout"}>Proceed to Checkout</Link>
      </Button>
    </div>
  )
}

export default Cart
