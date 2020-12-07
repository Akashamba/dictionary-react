import React from "react";
import {withRouter} from 'react-router';

const SearchBar = (props) => (
  <form onSubmit={(event) => {
    event.preventDefault();
    props.history.push(`/word/${event.target[0].value.toLowerCase()}`);
    event.target[0].value = '';
    }}>
    <input type="search" autoFocus/>
  </form>
)

export default withRouter(SearchBar);
