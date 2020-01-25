import React from 'react';

export function Question(props) {
    return <button onClick={props.onClick}>{props.text}</button>;
}

