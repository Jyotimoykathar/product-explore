import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList({ search, category }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  const filtered = products.filter((p) => {
    const matchSearch = p?.title?.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "All" ||
      p?.category?.toLowerCase().includes(category.toLowerCase());
    return matchSearch && matchCategory;
  });
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 col-span-full">
          No products found
        </p>
      )}
    </div>
  );
}
export default ProductList;
