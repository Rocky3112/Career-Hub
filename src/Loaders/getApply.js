import { getStoredCart } from "../utility/fakeDB"

export const productsAndCartData = async () => {
    const productsData = await fetch('/jobFeatures.json')
    const products = await productsData.json()
  
    const savedCart = getStoredCart()
    const AppliedData = []
    for (const id in savedCart) {
      const foundProduct = products.find(product => product.id == id)
      if (foundProduct) {
        const quantity = savedCart[id]
        foundProduct.quantity = quantity
        AppliedData.push(foundProduct)
      }
    }
  
    return { products, AppliedData }
  }