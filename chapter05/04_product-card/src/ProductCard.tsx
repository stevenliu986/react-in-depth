import "./ProductCard.css";

interface IBasePropductProps {
  productName: string;
  price: number;
}

interface IProductOnSaleProps {
  isOnSale: true;
  salePrice: number;
  saleExpiry: string;
}

interface IProductNoSaleProps {
  isOnSale: false;
}

type ProductProps = IBasePropductProps &
  (IProductOnSaleProps | IProductNoSaleProps);

function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function ProductCard(props: ProductProps): JSX.Element {
  const { productName, price, isOnSale } = props;

  return (
    <div className={`product-card ${isOnSale ? "on-sale" : ""}`}>
      <h3 className="product-name">{productName}</h3>
      <div className="price">
        <div className="regular-price">{formatPrice(price)}</div>
        {isOnSale && (
          <>
            <div className="sale-price">{formatPrice(props.salePrice)}</div>
            <div className="sale-expiry">Sale ends: {props.saleExpiry}</div>
          </>
        )}
      </div>
    </div>
  );
}
