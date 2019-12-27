import React from 'react';

export function Button(props) {
    return <button type="button" className="btn btn-success" onClick={props.onClick}>{props.text}</button>;
}

