import { useEffect, useState } from 'react';
import Product_31 from '../../components/midterm/Product_31';
import Wrapper from '../../assets/wrappers/midterm/Shop_31';
const api_url = 'http://localhost:5000/api/shop_31/hats';

const P3_NodePage_31 = () => {
  const [shop_31, setShop_31] = useState([]);

  const fetchShopFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setShop_31(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShopFromNodeServer();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>P3_NodePage_31</h3>
          <p className='text-center text-[16px]'>Hongkai, 214417031</p>
        </div>
        <div className='collection-page'>
          <h1 className='title'>Hats</h1>
          <div className='items'>
            {shop_31.map((item) => {
              const { pId, name, price, img_url } = item;

              return (
                <Product_31
                  key={pId}
                  name={name}
                  price={price}
                  img_url={img_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P3_NodePage_31;
