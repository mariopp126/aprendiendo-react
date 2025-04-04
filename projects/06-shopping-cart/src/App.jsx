import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import {IS_DEVELOPMENT} from './config.js'


function App() {
 const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
