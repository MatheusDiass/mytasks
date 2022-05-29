function Search({ search }) {
  function handleSearch({ target: { value } }) {
    search(value);
  }

  return <input className="input input--icon input--search" type={'text'} onChange={handleSearch} />;
}

export default Search;
