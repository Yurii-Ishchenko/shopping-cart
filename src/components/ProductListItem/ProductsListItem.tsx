import useStyles from './ProductsListItem-styles';
import Button from '../Button/Button';
import { AiOutlineCheck } from 'react-icons/ai';

interface IProps {
  id: string;
  title: string;
  url: string;
  price: number;
  onClick: () => void;
  promotion: {
    priceTagsUrl: string;
    discountedKg: number;
    discountQantity: number;
  } | null;
  isAllredyInCart: boolean;
}

export default function ProductsListItem({
  id,
  title,
  url,
  price,
  onClick,
  promotion,
  isAllredyInCart,
}: IProps) {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      {promotion && (
        <div className={classes.priceTags}>
          <img src={promotion.priceTagsUrl} alt="" width="300" />
        </div>
      )}
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.imageContainer}>
        <img src={url} alt={title} width="200" />
      </div>

      <p className={classes.price}>Price: {price}$</p>
      <div className={classes.buttonContainer}>
        {!isAllredyInCart ? (
          <Button
            onClick={onClick}
            backgroundColor="green"
            hoverColor="#006600"
          >
            Add to cart
          </Button>
        ) : (
          <AiOutlineCheck size="3em" color="green" />
        )}
      </div>
    </li>
  );
}
