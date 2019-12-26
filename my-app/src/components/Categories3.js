import React from 'react';

// The Container / View Pattern
const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

// However, the child components are not aware of the origin nor the functionality of the functions received in the props. 
// These functions can update the state in a parent component yet could do something else. 
// The child components only execute them. 
const Categories = ({ categories }) => (
    <div>
        {categories.map(category => <div>
            <label>{category.title}</label>
            <input type="radio" value={category.id} onClick={this.onCategorySelected} />
        </div>)}
    </div>);

export const Categories3 = ({ loading, categories }) => {
    if (loading) {
        return <LoadingView />;
    } else if (categories) {
        return <Categories {...categories} />;
    } else {
        return <ErrorView />;
    }
};

// Presentational components are concerned with how the things look. 
// They have the additional markup needed for making the page pretty. 
// Such components are not bound to anything and have no dependencies. 
// Very often implemented as a stateless functional components they don't have internal state.

// Now the individual views are even more isolated, which can help the testing,
// Deciding how much to break the view is best done with a case by case analysis,
//  and the rule of thumb is to keep it simple to understand. This can vary a lot, so use your best judgment!

// ES6 class components and functional stateless components. 
// A functional stateless component is only a function that receives props and outputs JSX.
//  It doesn't hold any state nor does it have access to React's lifecycle methods.
// React's ES6 class components, on the other hand, can have local state and lifecycle methods.
//  These components have access to this.state and the this.setState() method. 
// This means that ES6 class components can be stateful components. 
// In addition, higher order components can be used to add state to React components too.

// Splitting the components in containers and presentation increases the reusability of the components. 