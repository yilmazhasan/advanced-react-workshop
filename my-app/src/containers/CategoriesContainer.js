import { Categories2 } from "../components/Categories2";

// separate the logic and the view.
// Let's say we want to use a style guide tool like Storybook to render the component in all three states
//  to be able to polish each version well or even showcase it to other teams. 
// With the separated view component, we can very easily use it in a style guide, 
// and fine tune each of the variants just by providing different props.

// Also, my experience shows that this pattern scales better: 
// maybe one of the view states gets big, and it's straightforward to extract it through a new component. 
// On the logic side, it's also much easier to understand and change code not polluted with view related stuff.


export class CategoriesContainer extends React.Component {
    state = { loading: true };

    componentDidMount() {
        fetch("http://jservice.io/api/categories?count=20")
            .then(res => res.json())
            .then(categories => this.setState({ loading: false, categories }),
                error => this.setState({ loading: false, error }));
    }

    render() {
        return <Categories2 {...this.state} />;
    }
}

// Basically it divides components into two types: container and presenter.
//  A container component describes how things work and a presenter component describes how things look.
//  Often it implies that a container component is a ES6 class component, for instance because it manages local state,
//  and a presenter component is a functional stateless component, 
// for instance because it only displays its props and uses a couple of functions that were passed down from the parent component.

// Containers know about data, its shape and where it comes from.
//  They know details about how the things work or the so called business logic.
//  They receive information and format it so like is easy to be used by the presentational component. 