import React from 'react';
import { CategoriesView } from "../components";

export class CategoriesContainer extends React.Component {
    state = { loading: true };

    componentDidMount() {
        fetch("http://jservice.io/api/categories?count=5")
            .then(res => res.json())
            .then(categories => this.setState({ loading: false, categories }),
                error => this.setState({ loading: false, error }));
    }

    render() {
        return <CategoriesView {...this.state} onCategorySelected={this.props.onCategorySelected} />;
    }
}