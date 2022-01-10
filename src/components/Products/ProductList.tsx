import React from "react"
import ProductCard from "./ProductCard"
import "./productlist-style.css"
const ProductList = ({ products }: any) => {
  // const [products, setProducts] = useState([] as any[])
  // const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // useEffect(() => {
  //   Products.all()
  //     .then((data: any) => {
  //       setProducts(data.products)
  //     })
  //     .then(() => setIsLoaded(true))
  // }, [])
  return (
    <div className="product-card--container">
      {products.length > 0 ? (
        products.map((product: any, index: number) => (
          <ProductCard

            products={products}
            key={index}
            id={product.id}
            title={product.title}
            description={product.description}
            img_url={product.img_url}
            price={product.price / 100}
          />
          // <></>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ProductList
