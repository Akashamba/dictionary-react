import React from 'react';
import Carousel from '../../components/word-carousel/word-carousel.component';
import Synonyms from '../../components/synonyms/synonyms.component'
import { ReactComponent as Search } from '../../assets/search.svg';
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
    .then((result) => this.setState(
      {data: result}
    ));
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
        return(
          <div className='error'>
            <p style={{ textAlign: 'center' }}>No Results Found for "{this.props.match.params.word}"</p>
            <p>Tip: Try using the root form of words, like "run", instead of "ran"</p>
          </div>
        )
    if(this.state.data.senses) {
      // const { senses, synonyms, pronunciation } = this.state.data;
      const {senses, synonyms} = this.state.data
      return(
        <div>
          <br />
          <h1 className='word'>{this.state.data.word}</h1>
          <br /><br />
          <Carousel senses={senses} />
          <br /><br /><br />
          <Synonyms synonyms={synonyms} />
        </div>
     )
    }
    return(<div><br /><br/><Search /><p className='loading'>Searching...</p></div>)
  }
}

export default Result;