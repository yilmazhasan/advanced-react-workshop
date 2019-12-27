import React from 'react';
import { createContext } from 'react';
import { Loading } from './Loading';
import { Error } from './Error';

const QuestionsContext = createContext({ loading: true });

const Questions = () => {
    return <QuestionsContext.Consumer>{(category) => <ul className="list-group">
        {
            category.clues.map(clue =>
                <li className="list-group-item" key={clue.id}>{clue.question}</li>)
        }
    </ul>}
    </QuestionsContext.Consumer >
};

class QuestionsProvider extends React.Component {
    state = { loading: true };

    componentDidMount() {
        fetch(`http://jservice.io/api/category?id=${this.props.categoryId}`)
            .then(res => res.json())
            .then(category => this.setState({ loading: false, category }),
                error => this.setState({ loading: false, error }));
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        } else if (this.state.category) {
            return <QuestionsContext.Provider value={this.state.category}>
                {this.props.children}
            </QuestionsContext.Provider>
        } else {
            return <Error />;
        }
    }
};

export const QuestionsWithContextApi = (props) => (
    <QuestionsProvider {...props}>
        <Questions />
    </QuestionsProvider>);