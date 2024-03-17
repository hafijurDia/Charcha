import './product.css'


const Product = ({name , price, image}) => {
  return (
    <div className='p'>
      
        <div className="p-browser">
            <div className="p-cicrle"></div>
            <div className="p-cicrle"></div>
            
            <div className="p-cicrle"></div>

            
        </div>
      <a href='http://nilamhouse.com' target='_blank' rel='noreferrer'>
        <img src={image} alt="" className="p-img" />
        <p className="p-other-info" style= {{display: 'flex', color: 'red', justifyContent: 'space-between'}}>
        <span className="p-name"> { name}</span>
        <span className="p-price">{price}</span>
        </p>
      </a>
    </div>
  )
}

export default Product