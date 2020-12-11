import React from 'react';
import Carousel from '../../components/word-carousel/word-carousel.component';
import './word-data.styles.css';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }
  }

  getMeaning = (word) => {
    this.setState({data: {}})
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
        return(<div style={{ fontSize: '1.25rem'}}>{this.state.data.error}</div>)
    if(this.state.data.results) {
      const { definitions, examples, synonyms } = this.state.data.results[0];
      let example_list = [];
      let synonym_list = [];

      examples.map(array => {
        array.map(array => {
          example_list.push(array.text)
          return null
        })
        return null
      })

      synonyms.map(array => {
        console.log(array)
        return null
      })
      
      return(
        <div>
          <br />
          <h1 id='word'>{this.state.data.word}</h1>
          <br />
          <br />
          <Carousel data={definitions} />
          <br /><br /><br />
          <Carousel data={example_list} />
          <br /><br /><br />
          <Carousel data={synonym_list} />
        </div>
        
     )
    }
    return(<div></div>)
  }
}

export default Result;