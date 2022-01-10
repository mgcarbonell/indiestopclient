import React, { useEffect, useContext } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import "./cartitem-style.css"

const CartItem = (item: any) => {
  const count: any = {}
  const { items } = useContext(ShoppingCartContext)
  useEffect(() => {
    items?.forEach((item) => {
      if (!count[item.title]) count[item.title] = 1
      else ++count[item.title]
    })
    // console.log(`count from use effect `, count)
  }, [])
  return (
    <div key={"key" + item.item.id} className="cart-item-container">
      <img src={item.item.img_url} alt={`a ${item.item.title} onesie`} className="cart-item-img"/>
      <h1 className="cart-title">{item.item.title}</h1>
      <p className="cart-item-qty">{count[item.item.title]}</p>
    </div>
  )
}

export default CartItem
