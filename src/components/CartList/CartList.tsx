import { useSelector, useDispatch } from 'react-redux';
import CartListItem from '../CartListItem/CartListItem';
import {
  productIncrement,
  productDecrement,
  deleteProduct,
} from '../../redux/products/products-actions';
import {
  getAllProducts,
  getTotalProductPrice,
} from '../../redux/products/products-selectors';
import useStyles from './CartList-style';

export default function CartList() {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const totalProductPrice = useSelector(getTotalProductPrice);
  const classes = useStyles();
  const incrementProduct = (id: string) => {
    dispatch(productIncrement(id));
  };

  const decrementProduct = (id: string, quantity: number) => {
    if (quantity === 0) {
      return;
    }
    dispatch(productDecrement(id));
  };
  return (
    <>
      {products.length > 0 ? (
        <>
          <div className={classes.container}>
            <ul className={classes.list}>
              {products.map(({ id, title, quantity, url }) => (
                <CartListItem
                  key={id}
                  title={title}
                  quantity={quantity}
                  url={url}
                  increment={() => incrementProduct(id)}
                  decrement={() => decrementProduct(id, quantity)}
                  deleteItem={() => dispatch(deleteProduct(id))}
                />
              ))}
            </ul>
          </div>
          <p className={classes.totalPrice}>
            Total price: {totalProductPrice}$
          </p>
        </>
      ) : (
        <h2 className={classes.noProducts}>
          There are no products in your shopping cart yet.
        </h2>
      )}
    </>
  );
}
