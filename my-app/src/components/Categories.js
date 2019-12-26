import React from 'react';

export class Categories extends React.Component {
    constructor(props) {
        super(props)
        // A React component has an initial state defined in the constructor. 
        this.state = { loading: true, error: null, categories: null };
    }

    // Everything that needs to stay interactive goes into the state. Everything else is just passed down as props.
    // This method is invoked only once, after rendering occurs for the first time. 
    componentDidMount() {
        fetch("http://jservice.io/api/categories?count=20")
            .then(res => res.json())
            .then(categories => this.setState({ loading: false, categories }),
                error => this.setState({ loading: false, error }));
                // The updating of the state object is a shallow merge.
                // Once the state got updated, the component re-renders. 
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return <div>I'm sorry! Please try again.</div>;
    }

    // React provides a series of attributes for handling events.
    // The solution is almost the same as the one used in the standard DOM. 

    // In addition, child components can receive callback functions in the props from their parent components. 
    // These functions can be used to alter the local state of parent components. 

    onCategorySelected = (e) => {
        this.props.onCategorySelected(e.target.value)
    }

    renderCategories() {
        return (<div>
            {this.state.categories.map(category => <div>
                <label>{category.title}</label>
                <input type="radio" value={category.id} onClick={this.onCategorySelected} />
            </div>)}
        </div>);
    }

    render() {
        // Side note: whenever we deal with fetching data from somewhere in a way that may take time or fail, 
        // we need to define views for those states. 
        // We always need to define a view for the loading state and a view for the error state. 
        // No network is perfect, and we need to prepare our app for problems! 
        // simple Loading / Error / Success pattern 

        if (this.state.loading) {
            return this.renderLoading();
        } else if (this.state.categories) {
            return this.renderCategories();
        } else {
            return this.renderError();
        }
    }
}
// it's self-contained. Plug a <Categories /> anywhere in your application, and it will fetch and render the data.

// people never run into the problems of scaling state management with local state (this.state) only
// thus people don't understand the need of a state management library like Redux
// thus people complain that it adds too much boilerplate
// people never learn to manage local state in React
// thus people will manage (and clutter) all of their state in a state container provided by Redux
// thus people never use the local state management
// Because of these drawbacks, you will often get the advice to learn React first and opt-in Redux to your tech stack 
// in a later point in time. But only opt-in Redux if you run into issues scaling your state management. 
// These scaling issues only apply for larger applications. 


// So, what problems could this component have? 
// Both the logic and the view are intertwined in one indivisible component,
// and that's why I also call this pattern the Mixed Component pattern. 
// For a better workflow and simpler, more testable and more maintainable code, 
// we need to separate the logic and the view
