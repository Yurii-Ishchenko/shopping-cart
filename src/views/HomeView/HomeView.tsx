import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import routes from '../../routes';
import ProductsList from '../../components/ProductsList/ProductsList';
import useStyles from './HomeView-styles';
import { getAllProductsQuantity } from '../../redux/products/products-selectors';

export default function HomeView() {
  const classes = useStyles();
  const location = useLocation();
  const allProductsQuantity = useSelector(getAllProductsQuantity);

  return (
    <>
      <div className={classes.linkContainer}>
        <Link
          to={{
            pathname: routes.cart,
            state: { from: location },
          }}
          className={classes.link}
        >
          <div className={classes.iconContainer}>
            {allProductsQuantity > 0 && (
              <div className={classes.cartIconChild}>
                <span className={classes.innerChild}>
                  {allProductsQuantity}
                </span>
              </div>
            )}
            <AiOutlineShoppingCart size="5em" color="black" />
          </div>
        </Link>
      </div>
      <h1 className={classes.title}>Only fresh fruits</h1>
      <ProductsList />
    </>
  );
}
