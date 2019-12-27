import React from 'react';
import { StatelessCategories, Categories } from '../components';

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

export default categories(StatelessCategories);