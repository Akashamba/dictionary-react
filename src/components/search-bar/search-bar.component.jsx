import React from "react";
import {withRouter} from 'react-router';

// const handleSubmit = (event, props) => {
//   event.preventDefault();
//   // props.history.push(event.target[0].value)
// }

const SearchBar = (props) => (
  <form onSubmit={(event) => props.history.push(event.target[0].value)}>
    <input type="search" />
  </form>
)

export default withRouter(SearchBar);
