import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
