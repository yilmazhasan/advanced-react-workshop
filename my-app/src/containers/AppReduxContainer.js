import { connect } from 'react-redux'
import AppRedux from '../AppRedux'
import { selectCategory, requestCategories } from "../store";

// mapStateToProps parameter is a function that accepts the current state and must return a set of key-value pairs 
// (an object) that are getting send as props to our React component. 
function mapStateToProps(state) {
    console.log(state);
    return state;
}

// mapDispatchToProps is a similar one but instead of the state receives a dispatch function. 
// Here is the place where we can define a prop for dispatching actions.
const mapDispatchToProps = {
    onGameStarted: requestCategories,
    onCategorySelected: (id) => selectCategory(id)
};

// (2) connect function - it is a function that does the subscribing for updates in the store and re-renders our component. 
// It implements a higher-order component. Here is its signature:

export const AppReduxContainer = connect(mapStateToProps, mapDispatchToProps)(AppRedux)