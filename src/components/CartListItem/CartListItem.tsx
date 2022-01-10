import useStyles from './CartListItem-styles';
import Button from '../Button/Button';
import { BiTrash } from 'react-icons/bi';

interface IProps {
  title: string;
  quantity: number;
  url: string;
  price: number;
  promotion: {
    priceTagsUrl: string | null;
    discountedKg: number;
    discountQantity: number;
  } | null;
  increment: () => void;
  decrement: () => void;
  deleteItem: () => void;
}

export default function CartListItem({
  title,
  quantity,
  url,
  price,
  promotion,
  increment,
  decrement,
  deleteItem,
}: IProps) {
  const classes = useStyles();
  const productQuantity = promotion
    ? quantity * price -
      Math.floor(quantity / promotion.discountedKg) * promotion.discountQantity
    : quantity * price;
  return (
    <li className={classes.item}>
      <div className={classes.imageContainer}>
        <img src={url} alt={title} width="70" />
      </div>

      <div className={classes.counter}>
        <button type="button" onClick={decrement} className={classes.button}>
          -
        </button>
        <div className={classes.quantityContainer}>
          <p className={classes.quantity}>{quantity}</p>
        </div>
        <button type="button" onClick={increment} className={classes.button}>
          +
        </button>
      </div>
      <p className={classes.price}>{`${productQuantity}$`}</p>
      <div className={classes.quantityContainer}>
        <Button
          onClick={deleteItem}
          width="40px"
          height="40px"
          backgroundColor="#FC9090"
          hoverColor="red"
        >
          <BiTrash size="2em" />
        </Button>
      </div>
    </li>
  );
}
