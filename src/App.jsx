import { toast } from "react-toastify";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const handleToast = () => {
    toast.success("Welcome to Product Explore!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* header section */}
      <header className="bg-blue-600 text-white text-center py-4 shadow-md">
        <h1 className="text-2xl font-bold">Product Explore</h1>
      </header>

      {/* main section */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <SearchBar search={search} setSearch={setSearch} />
          <CategoryFilter category={category} setCategory={setCategory} />
          <button className="btn-primary" onClick={handleToast}>
            Test Toast
          </button>
        </div>
        <ProductList search={search} category={category} />
      </main>

      {/* footer section */}
      <footer className="text-center text-gray-500 text-sm py-4">
        &copy;{new Date().getFullYear()}Product Explore
      </footer>
    </div>
  );
}
export default App;
