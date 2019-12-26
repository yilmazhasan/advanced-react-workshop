import React from 'react';

// There is another widely used pattern that separates the logic from the view, the Render Props 
// (also known as Children as Function).
// There is another widely used pattern that separates the logic from the view,
class QuestionsRenderProps extends React.Component {
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

const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

const Questions = ({ category, onCategorySelected }) => (<div>
    {category.clues.map(clue => <div>
        <label>{clue.question}</label>
        <input type="radio" value={category.id} onClick={onCategorySelected} />
    </div>)}
</div>);


// notice that a function is passed to the render prop:
export default (onCategorySelected) => (
    <QuestionsRenderProps
        render={({ loading, category }) => {
            if (loading) {
                return <LoadingView />;
            } else if (category) {
                return <Questions {...category, onCategorySelected} />;
            } else {
                return <ErrorView />;
            }
        }}
    />
);

// Logic/View: Container, HOC, RenderProps 
// The so called render prop pattern is almost the same except that we use the render prop and not children for rendering the todo.
// abstraction and reusability 
