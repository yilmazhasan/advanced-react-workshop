import React from 'react';

// The same applies for the props.
//  A component doesn't know if the received props are props, state or other derived properties from the parent component.
//  The child component just consumes them.
export class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, error: null, questions: null };
    }

    // Basically props flow down the component tree, 
    // state is managed by a component alone and functions can bubble up to alter the state in a component that manages state. 
    // The updated state can be passed down as props again.
    componentDidMount() {
        fetch(`http://jservice.io/api/category?id=${this.props.categoryId}`)
            .then(res => res.json())
            .then(category => this.setState({ loading: false, category }),
                error => this.setState({ loading: false, error }));
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return <div>I'm sorry! Please try again.</div>;
    }

    renderQuestions() {
        return (<div>
            {this.state.category.clues.map(clue => <div key={clue.id}>
                <label>{clue.question}</label>
            </div>)}
        </div>);
    }

    render() {
        if (this.state.loading) {
            return this.renderLoading();
        } else if (this.state.category) {
            return this.renderQuestions();
        } else {
            return this.renderError();
        }
    }
}