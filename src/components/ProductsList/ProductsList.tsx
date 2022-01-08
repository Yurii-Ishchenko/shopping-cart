import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getAllProducts } from '../../redux/products/products-selectors';
import initialProducts from '../../utils/products.json';
import ProductsListItem from '../ProductListItem/ProductsListItem';
import { addProductToCart } from '../../redux/products/products-actions';
import useStyles from './ProductList-styles';

export default function ProductsList() {
  const dispatch = useDispatch();
  const allProducts = useTypedSelector(getAllProducts);
  const classes = useStyles();
  const addedObjectToCart = (id: string): any => {
    return initialProducts.find(product => product.id === id);
  };

  const isAlreadyInCart = (id: string): boolean => {
    const ids = allProducts.map(product => product.id);
    return ids.includes(id);
  };
  const addToCart = (id: string, title: string) => {
    if (isAlreadyInCart(id)) {
      return toast.success(`${title} is already in shopping cart`, {
        theme: 'colored',
      });
    }
    dispatch(addProductToCart(addedObjectToCart(id)));
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
              onClick={() => {
                addToCart(id, title);
              }}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
