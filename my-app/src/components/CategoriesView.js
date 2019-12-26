import React from 'react';

// The Container / View Pattern
export class CategoriesView extends React.Component {
    constructor(props) {
        super(props)
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
            {this.props.categories.map(category => <div key={this.category.id}>
                <input type="radio" value={category.id} onClick={this.onCategorySelected} />
                <label>{category.title}</label>
            </div>)}
        </div>);
    }

    render() {
        if (this.props.loading) {
            return this.renderLoading();
        } else if (this.props.categories) {
            return this.renderCategories();
        } else {
            return this.renderError();
        }
    }
}

