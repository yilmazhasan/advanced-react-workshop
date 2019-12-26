import React from 'react';

// Every React component is like a small system that operates on its own. It has its own state, input and output. 
// The input of a React component is its props.
export function Header(props) {
    return <h1>{props.text}</h1>;
}

  // It is nice that we may think about every React component as a black box.
  // It has its own input, lifecycle and output. It is up to us to compose these boxes. 
  // And maybe that is one of the advantages that React offers. Easy to abstract and easy to compose.
