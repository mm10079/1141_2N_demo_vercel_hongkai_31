import Wrapper from '../../assets/wrappers/midterm/Shop_31';

const Product_31 = ({ name, price, img_url }) => {
  return (
    <Wrapper>
      <div className='collection-item'>
        <img className='image' src={img_url} />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <button className='custom-button'>Add to Cart</button>
      </div>
    </Wrapper>
  );
};
export default Product_31;
