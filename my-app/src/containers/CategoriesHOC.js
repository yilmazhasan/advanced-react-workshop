import React from 'react';
import { StatelessCategories, Categories } from '../components';

// Higher-Order Components (HOCs) are simply functions that take at least one component as a parameter 
// and return another component. Usually it adds props to the passed component after doing some work. 

// On the technical side the higher-order component is usually a function that accepts our original component 
// and returns an enhanced/populated version of it. 
// It builds up on the principle of higher order functions in JavaScript: A function that returns a function.

const categories = CategoriesViewComponent =>
    class extends React.Component {
        state = { loading: true };

        componentDidMount() {
            fetch("http://jservice.io/api/categories?count=5")
                .then(res => res.json())
                .then(categories => this.setState({ loading: false, categories }),
                    error => this.setState({ loading: false, error }));
        }

        render() {
            return <CategoriesViewComponent {...this.state} onCategorySelected={this.props.onCategorySelected} />;
        }
    };

// Now, all the planet fetching logic is inside this HOC, and is not dependent on any view logic.
//  It does not have any dependency on any particular React views, and it only adds some props to a passed component. 

// - because we control the input of the component we may send something that the component usually has no access to
// The knowledge for the appTitle is hidden into the component. 
// OriginalTitle knows only that it receives a prop called title. It has no idea that this is coming from a configuration file.
// That's a huge advantage because it allows us to isolate blocks. 
// export default categories(CategoriesView);
export default categories(StatelessCategories);

// The only situation that these initial patterns are not useful for is when we need to reuse the logic with different views. 
