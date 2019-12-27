import React from 'react';

export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, error: null, categories: null };
    }

    componentDidMount() {
        fetch("http://jservice.io/api/categories?count=5")
            .then(res => res.json())
            .then(categories => this.setState({ loading: false, categories }),
                error => this.setState({ loading: false, error }));
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return <div>I'm sorry! Please try again.</div>;
    }

    onCategorySelected = (e) => {
        this.props.onCategorySelected(e.target.value)
    }

    renderCategories() {
        return (<div>
            {/* Keys help React identify which items have changed, are added, or are removed. */}
            {this.state.categories.map(category => <div key={category.id}>
                <input type="radio" value={category.id} onClick={this.onCategorySelected} />
                <label>{category.title}</label>
            </div>)}
        </div>);
    }

    render() {
        if (this.state.loading) {
            return this.renderLoading();
        } else if (this.state.categories) {
            return this.renderCategories();
        } else {
            return this.renderError();
        }
    }
}