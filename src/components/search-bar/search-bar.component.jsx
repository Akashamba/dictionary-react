import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state_var: ""
    };
  }

  // componentDidMount() {
  //   fetch("https://wordsapiv1.p.mashape.com/words/example")
  //     .then((result) => result.json())
  //     .then((result) => console.log(result));
  // }

  render() {
    return <input type="search" />;
  }
}

export default SearchBar;
