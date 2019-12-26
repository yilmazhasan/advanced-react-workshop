import React from 'react';

// The first obvious output of a React component is the rendered HTML.
// However, because the prop may be everything including a function we could also send out data or trigger a process.
export function Button(props) {
    return <button onClick={props.onClick}>{props.text}</button>;
}

