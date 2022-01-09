import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getAllProducts } from '../../redux/products/products-selectors';
import initialProducts from '../../utils/products.json';
import ProductsListItem from '../ProductListItem/ProductsListItem';
import { addProductToCart } from '../../redux/products/products-actions';
import useStyles from './ProductList-styles';
import { initialProductInterface } from '../../redux/products/products-types';

export default function ProductsList() {
  const dispatch = useDispatch();
  const allProducts = useTypedSelector(getAllProducts);
  const classes = useStyles();

  const addedObjectToCart = (id: string): initialProductInterface => {
    const ids = initialProducts.map(product => product.id);
    const index = ids.indexOf(id);
    return initialProducts[index];
  };

  const isAlreadyInCart = (id: string): boolean => {
    const ids = allProducts.map(product => product.id);
    return ids.includes(id);
  };

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
          {initialProducts.map(({ id, title, url, price, priceTagsUrl }) => (
            <ProductsListItem
              key={id}
              id={id}
              title={title}
              url={url}
              price={price}
              priceTagsUrl={priceTagsUrl}
              isAllredyInCart={isAlreadyInCart(id)}
              onClick={() => {
                dispatch(addProductToCart(addedObjectToCart(id)));
              }}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
