function SearchBox({ query, setQuery }) {

  return (

    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

  );

}

export default SearchBox;