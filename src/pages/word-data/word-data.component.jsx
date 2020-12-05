import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }
  }

  getMeaning = (word) => {
    console.log(word)
    fetch(`https://dictionary-backend-node.herokuapp.com/api/${word}`)
    .then((result) => result.json())
    .then((result) => this.setState({data: result}));
  }

  componentDidMount() {
    this.getMeaning(this.props.match.params.word);
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params !== prevProps.match.params) {
      this.getMeaning(this.props.match.params.word);
    }
  }

  render() {
    if(this.state.data.error)
        return(<div>{this.state.data.error}</div>)
    if(this.state.data.results)
      return(
        <div>{this.state.data.word}: {this.state.data.results[0].definitions[0]}</div>
      )
    return(<div></div>)
  }
}

export default Result;