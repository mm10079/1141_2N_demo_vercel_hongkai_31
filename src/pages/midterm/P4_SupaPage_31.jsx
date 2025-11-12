import { useEffect, useState } from 'react';
import { supabase } from '../../db/clientSupabase';
import Product_31 from '../../components/midterm/Product_31';
import Wrapper from '../../assets/wrappers/midterm/Shop_31';

const P4_SupaPage_31 = () => {
  const [shop_31, setShop_31] = useState([]);

  const fetchShopFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('shop_31').select('*');
      setShop_31(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShopFromSupaServer();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>P4_SupaPage_31</h3>
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

export default P4_SupaPage_31;
