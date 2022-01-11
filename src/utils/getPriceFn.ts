import { getProductPriceInterface } from '../redux/products/products-types';

export const getPriceFn = ({
  promotion,
  quantity,
  price,
}: getProductPriceInterface): number => {
  return promotion
    ? quantity * price -
        Math.floor(quantity / promotion.discountedKg) *
          promotion.discountQantity
    : quantity * price;
};
