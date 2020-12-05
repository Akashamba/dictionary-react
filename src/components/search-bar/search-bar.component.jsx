import React from "react";
import {withRouter} from 'react-router';

const SearchBar = (props) => (
  <form onSubmit={(event) => {
    event.preventDefault()
    props.history.push(event.target[0].value)
    }}>
    <input type="search" />
  </form>
)

export default withRouter(SearchBar);
