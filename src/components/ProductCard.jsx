function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-3"
      />
      <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
      <p className="text-gray-600 text-sm mt-1">{product.category}</p>
      <p className="text-blue-600 font-bold mt-2">{product.price}</p>
    </div>
  );
}
export default ProductCard;
