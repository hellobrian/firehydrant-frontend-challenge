import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
import { ProductsPage } from "./pages/ProductsPage";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <ProductsPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
