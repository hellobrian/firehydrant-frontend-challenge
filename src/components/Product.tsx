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

interface AvatarProps {
  imgSrc: string;
  name: string;
}

function Avatar(props: AvatarProps) {
  const { imgSrc, name } = props;
  return (
    <div className={styles.Avatar}>
      <img className={styles.Avatar} src={imgSrc} alt="avatar" />
      <span>{name}</span>
    </div>
  );
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
      {data && <Avatar imgSrc={data.avatar} name={data.name} />}
      <p className={styles.Summary}>{summary}</p>
    </div>
  );
}
