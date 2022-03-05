import SearchBar from "material-ui-search-bar";
import React from "react";

function Search(props) {
  const { query, updateQuery } = props;

  return (
    <SearchBar
      style={{ margin: 50, height: "8vh" }}
      value={query}
      onChange={newQuery => updateQuery(newQuery)}
      onCancelSearch={() => updateQuery("")}
    />
  );
}

export default Search;
