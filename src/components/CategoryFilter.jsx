function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Electronics",
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
  ];
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="input-field sm:w-48"
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
export default CategoryFilter;
