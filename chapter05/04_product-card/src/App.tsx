import ProductCard from "./ProductCard.tsx";

function App() {
  const products = [
    {
      productName: "Venus",
      price: 300000,
      isOnSale: false,
    },
    {
      productName: "Mars",
      price: 250000,
      isOnSale: true,
      salePrice: 200000,
      saleExpiry: "2023-10-31",
    },
    {
      productName: "Neptune",
      price: 500000,
      isOnSale: false,
      salePrice: 0,
    },
  ];
  return (
    <>
      {products.map((product) => (
        <ProductCard
          productName={product.productName}
          price={product.price}
          isOnSale={product.isOnSale}
          salePrice={product.salePrice ?? 0}
          saleExpiry={product.saleExpiry ?? ""}
          key={product.productName}
        />
      ))}
    </>
  );
}

export default App;
