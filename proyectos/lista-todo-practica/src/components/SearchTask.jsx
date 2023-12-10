/* eslint-disable */

const SearchTask = ({search, setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e)=> e.preventDefault()}>
      <label htmlFor="search"></label>
      <input 
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search task"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchTask