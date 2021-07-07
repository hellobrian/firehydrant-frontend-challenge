import { useState } from "react";
import { useQuery } from "react-query";
import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
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
  const [page, setPage] = useState(0);

  const { status, data, error, isPreviousData } = useQuery(
    ["products", page],
    () => getProducts(page),
    { keepPreviousData: true }
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
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
      <Pagination
        isPreviousData={isPreviousData}
        setPage={setPage}
        page={page}
      />
    </>
  );
}
