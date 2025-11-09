function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="input-field sm:w-64"
    />
  );
}
export default SearchBar;
