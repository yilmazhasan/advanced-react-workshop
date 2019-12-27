import React from 'react';

export class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, error: null, questions: null };
    }

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
        return (<ul className="list-group">
            {this.state.category.clues.map(clue =>
                <li className="list-group-item" key={clue.id}>{clue.question}</li>)}
        </ul>);
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