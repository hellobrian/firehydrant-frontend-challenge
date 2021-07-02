import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const API_URL = "http://localhost:3001";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Colors></Colors>
      <Users></Users>
      <Products></Products>
    </QueryClientProvider>
  );
}

async function getColors() {
  const result = await fetch(`${API_URL}/colors`).then((response) =>
    response.json()
  );
  return result;
}

async function getUsers() {
  const result = await fetch(`${API_URL}/users`).then((response) =>
    response.json()
  );
  return result;
}

async function getProducts() {
  const result = await fetch(`${API_URL}/products`).then((response) =>
    response.json()
  );
  return result;
}

function Colors(): JSX.Element {
  const { status, data } = useQuery("colors", getColors);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

function Users(): JSX.Element {
  const { status, data } = useQuery("users", getUsers);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

function Products(): JSX.Element {
  const { status, data } = useQuery("products", getProducts);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
