import { useQuery } from "react-query";

import { getUserById } from "../utils/api";
import styles from "./Product.module.scss";

interface ProductProps {
  name: string;
  summary: string;
  createdById: number;
}

interface UserApi {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export function Product(props: ProductProps): JSX.Element {
  const { name, summary, createdById } = props;
  const { status, data } = useQuery(["userById", createdById], () =>
    getUserById(createdById).then((result: [UserApi]) => result[0])
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.Product} shadow-md`}>
      <h3 className={styles.Name}>{name}</h3>
      <p className={styles.Summary}>{summary}</p>
      {data && <p className={styles.CreatedBy}>Created by: {data.name}</p>}
    </div>
  );
}
