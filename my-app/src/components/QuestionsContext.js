import React from 'react';

// Many of the modules/components that we write have dependencies. 
// A proper management of these dependencies is critical for the success of the project. 
// There is a technique (most people consider it a pattern) called dependency injection that helps solving the problem.
// It's relatively simple: you gather your data, put it in the React context object,
//  and then in a HOC (or Render Prop) you access the context object and pass it as a prop to the intended components. 

// For years the context API was not really recommended by Facebook. 
// They mentioned in the official docs that the API is not stable and may change. And that is exactly what happened.
//  In the version 16.3 we got a new one which I think is more natural and easy to work with.

import { createContext } from 'react';

const Context = createContext({});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

// The Provider accepts our context in the form of a value prop. The consumer is used to access the context and basically read data from it. And because they usually live in different files it is a good idea to create a single place for their initialization.

export class QuestionProvider extends React.Component {
    state = { loading: true };


    componentDidMount() {
        this.fetchQuestions();
    }

    fetchQuestions() {
        fetch(`http://jservice.io/api/category?id=${this.props.categoryId}`)
        .then(res => res.json())
        .then(category => this.setState({ loading: false, category }),
            error => this.setState({ loading: false, error }));
    }

    componentDidUpdate(prevProps) {
        if(this.props.categoryId != prevProps.categoryId) // Check if there is a change in selection of categories
        {
          this.fetchQuestions();
        }
    }

    getChildContext() {
        return { category: this.state };
    }


    render() {
        return (
            <Provider value={this.state}>
                <Questions onCategorySelected={this.props.onCategorySelected} />
            </Provider>
        );
    }
};

const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

const Questions = ({ onCategorySelected }) => {
    return <Consumer>{({ category }) =>
        <div>
            {category.clues.map(clue => <div>
                <label>{clue.question}</label>
                <input type="radio" value={category.id} onClick={onCategorySelected} />
            </div>)}
        </div>}
    </Consumer>
};

// "props drilling" in React, because you don't need to reach your props through all components which are not interested in them. 

// Layered react app - > surekli state pass etmek zorunda kaliyoruz.  
// The string "React in patterns" should somehow reach the Title component. 
// The direct way of doing this is to pass it from App to Header and then Header pass it down to Title.
//  However, this may work for these three components but what happens if there are multiple properties and deeper nesting.
//   Lots of components will act as proxy passing properties to their children.

// Context is designed to share data that can be considered “global” for a tree of React components,
//  such as the current authenticated user, theme, or preferred language.

// Before relying on a sophisticated state management library, you should have passed your props a couple of components down the component tree. 
// You should know the feeling of "there needs to be a better way to do this" when you only pass props down a handful of components without using these props in the components between but only in the very last child component.
