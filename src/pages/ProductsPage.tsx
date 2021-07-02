import { useQuery } from "react-query";

import { Product } from "../components/Product";
import { getProducts } from "../utils/api";

import styles from "./ProductsPage.module.scss";

interface ProductApi {
  id: number;
  name: string;
  created_at: string;
  summary: string;
  color: string;
  active: boolean;
  created_by_id: number;
}

export function ProductsPage(): JSX.Element {
  const { status, data } = useQuery("products", getProducts);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.ProductsPage}>
        {data.map((product: ProductApi) => (
          <Product
            key={product.id}
            name={product.name}
            summary={product.summary}
            createdById={product.created_by_id}
          />
        ))}
      </div>
    </>
  );
}
