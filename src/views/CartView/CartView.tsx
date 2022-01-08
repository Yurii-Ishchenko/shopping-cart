import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiTrash, BiReply } from 'react-icons/bi';
import CartList from '../../components/CartList/CartList';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { clearCart } from '../../redux/products/products-actions';
import routes from '../../routes';
import useStyles from './CartView-style';
import { getAllProducts } from '../../redux/products/products-selectors';

export default function CartView() {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const cartProducts = useSelector(getAllProducts);
  interface IStateType {
    from: { pathname: string };
  }
  const { state } = useLocation<IStateType>();

  const goBack = () => {
    history.push(state?.from ?? routes.home);
  };
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <h1 className={classes.title}>Your shopping cart</h1>
      <CartList />

      <div className={classes.buttonContainer}>
        <div className={classes.button}>
          <Button
            onClick={goBack}
            width="70px"
            height="70px"
            backgroundColor="green"
            hoverColor="#006600"
          >
            <BiReply size="2em" />
          </Button>
        </div>
        {cartProducts.length > 0 && (
          <div className={classes.button}>
            <Button
              onClick={toggleModal}
              width="70px"
              height="70px"
              backgroundColor="#FC9090"
              hoverColor="red"
            >
              <BiTrash size="2em" />
            </Button>
          </div>
        )}
      </div>
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <div>
            <h2 className={classes.deleteTitle}>Are you sure?</h2>
            <div className={classes.buttonContainer}>
              <Button onClick={toggleModal} backgroundColor="green">
                No
              </Button>
              <Button
                backgroundColor="red"
                onClick={() => {
                  dispatch(clearCart());
                  toggleModal();
                }}
              >
                Yes
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
