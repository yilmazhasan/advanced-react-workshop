import React from 'react';
import { Loading } from './Loading';
import { Error } from "./Error";

const Categories = (props) => (
    <div>
        {/* Keys help React identify which items have changed, are added, or are removed. */}
        {props.categories.map(category => <div key={category.id}>
            <input type="radio" value={category.id} onClick={(e) => props.onCategorySelected(e.target.value)} />
            <label>{category.title}</label>
        </div>)}
    </div>);

export const StatelessCategories = (props) => {
    if (props.loading) {
        return <Loading />;
    } else if (props.categories) {
        return <Categories {...props} />;
    } else {
        return <Error />;
    }
};