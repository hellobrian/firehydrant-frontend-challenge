import { QueryClient, QueryClientProvider } from "react-query";

import { ProductsPage } from "./pages/ProductsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}

export default App;
