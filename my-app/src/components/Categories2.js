import React from 'react';

// The Container / View Pattern
export class Categories2 extends React.Component {
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
            {this.props.categories.map(category => <div>
                <label>{category.title}</label>
                <input type="radio" name="categories" value={category.id} onClick={this.onCategorySelected} />
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

