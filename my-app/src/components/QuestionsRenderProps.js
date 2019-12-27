import React from 'react';
import { Loading } from './Loading';
import { Error } from './Error';
import { QuestionsContainer } from '../containers/QuestionsContainer';

const Questions = (props) => (<ul className="list-group">
    {props.clues.map(clue =>
        <li className="list-group-item" key={clue.id}>{clue.question}</li>)}
</ul>);


export const QuestionsRenderProps = (props) => (
    <QuestionsContainer
        categoryId={props.categoryId}
        render={(props) => {
            if (props.loading) {
                return <Loading />;
            } else if (props.category) {
                return <Questions {...props.category} />;
            } else {
                return <Error />;
            }
        }}
    />
);