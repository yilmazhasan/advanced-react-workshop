import React from 'react';

export class QuestionsContainer extends React.Component {
    state = { loading: true };

    componentDidMount() {
        fetch(`http://jservice.io/api/category?id=${this.props.categoryId}`)
            .then(res => res.json())
            .then(category => this.setState({ loading: false, category }),
                error => this.setState({ loading: false, error }));
    }

    render() {
        return this.props.render(this.state);
    }
}
