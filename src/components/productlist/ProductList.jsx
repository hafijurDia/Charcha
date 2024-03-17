import './productlist.css'
import Product from '../product/Product'
import PRODUCTS from '../../data-3'
const productList = () => {
  return (
    <div className='pl'>
        <div className="pl-tex">
            <h1 className="pl-title"> the title for the product</h1>
            <p className="p-desc">
                DESCRIPTION Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, eaque ducimus error, ad officiis beatae consequuntur labore non natus hic est eos atque.
            </p>
        </div>
        <div className="pl-list">
         {PRODUCTS.map((item)=> (
            <Product key={item.id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
    
    </div>
  )
}

export default productList