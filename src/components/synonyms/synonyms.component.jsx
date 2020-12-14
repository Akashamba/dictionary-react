import React from 'react';
import {Paper, Container} from '@material-ui/core'

export default function Synonyms({synonyms}) {
  return(
  <Paper>
    <br/>
    <Container>
      {synonyms.map(synonym => (
        <span style={{fontSize: '1.15rem'}} >
              {synonym}, &nbsp; </span>
      ))}
    </Container>
    <br/>
  </Paper>
  )
}