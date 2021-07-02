const API_URL = "http://localhost:3001";

export async function getColors() {
  const result = await fetch(`${API_URL}/colors`).then((response) =>
    response.json()
  );
  return result;
}

export async function getUsers() {
  const result = await fetch(`${API_URL}/users`).then((response) =>
    response.json()
  );
  return result;
}

export async function getProducts() {
  const result = await fetch(`${API_URL}/products`).then((response) =>
    response.json()
  );
  return result;
}

export async function getUserById(id: number) {
  const result = await fetch(`${API_URL}/users?id=${id}`).then((response) =>
    response.json()
  );
  return result;
}
