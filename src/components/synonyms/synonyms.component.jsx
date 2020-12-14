import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Paper, Container} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  synonym: {
    color: theme.palette.text.primary,
  }
}));

export default function Synonyms({synonyms}) {
  const classes = useStyles();

  return(
  <Paper>
    <br/>
    <Container>
      <h2>{synonyms.length>1?'Synonyms':'Synonym'}</h2>
      {synonyms.map(synonym => (
        <span style={{fontSize: '1.15rem'}} >
              <Link to={`/word/${synonym}`} className={classes.synonym}>
              {synonym}</Link>, &nbsp; </span>
      ))}
    </Container>
    <br/>
  </Paper>
  )
}