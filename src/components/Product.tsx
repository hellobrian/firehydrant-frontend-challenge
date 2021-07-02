import { useQuery } from "react-query";

import { getUserById } from "../utils/api";

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
    <div>
      <h3>{name}</h3>
      <p>{summary}</p>
      {data && <p>Created by: {data.name}</p>}
    </div>
  );
}
