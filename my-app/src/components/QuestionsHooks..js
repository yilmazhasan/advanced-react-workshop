import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';

// Hooks: 
// 3 problems:
// Wrapper hell -> component'lari kucultmeye basladikca 
// Huge components: yukardaki problem ile celisiyor  
// Confusing classes:  stateful primitive component -> class component 

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

    // In a function component, we instead use the useEffect hook to run code during the major lifecycle events.
    // This useEffect will execute when the component has finished mounting and every time something in the state changes. 
    useEffect(() => {
        fetchData();
    }, []);

    console.log(category)
    return category ? <Questions category={category} /> : <Loading />;
}