import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';

const Questions = (props) => (<ul className="list-group">
    {props.category.clues.map(clue =>
        <li className="list-group-item" key={clue.id}>{clue.question}</li>)}
</ul>);

export const QuestionsHooks = (props) => {
    const [category, setCategory] = useState();

    async function fetchData() {
        const res = await fetch(`http://jservice.io/api/category?id=${props.categoryId}`);
        res.json()
            .then(res => setCategory(res));
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(category)
    return category ? <Questions category={category} /> : <Loading />;
}