import React from "react";
import SearchBar from "../../components/search-bar/search-bar.component";
import SearchResults from "../../components/search-results/search-results.component";

class Homepage extends React.Component {

  render() {
    return (
      <div className="homepage">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default Homepage;
