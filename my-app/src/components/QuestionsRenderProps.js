import React from 'react';
import { Loading } from './Loading';
import { Error } from './Error';
import { QuestionsContainer } from '../containers/QuestionsContainer';

// There is another widely used pattern that separates the logic from the view, the Render Props 
// (also known as Children as Function).
// There is another widely used pattern that separates the logic from the view,

const Questions = (props) => (<div>
    {props.clues.map(clue => <div>
        <label>{clue.question}</label>
        <input type="text" />
    </div>)}
</div>);


// notice that a function is passed to the render prop:
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

// Logic/View: Container, HOC, RenderProps 
// The so called render prop pattern is almost the same except that we use the render prop and not children for rendering the todo.
// abstraction and reusability 
